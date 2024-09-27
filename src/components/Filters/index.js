import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSlice } from './FiltersSlice';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('')
  const [statusFilterChange, setStatusFilterChange] = useState('All')
  const [priorityChange, setPriorityChange] = useState([])
  const handleChangeInput = (e) =>{
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.filterChangeInput(e.target.value))
  }

  const handleStatusChange = (e) => {
    setStatusFilterChange(e.target.value)
    dispatch(filtersSlice.actions.filterChangeCheckBox(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setPriorityChange(value)
    dispatch(filtersSlice.actions.filterPriorityChange(value))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleChangeInput}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilterChange} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityChange}
          onChange={handlePriorityChange} 
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
