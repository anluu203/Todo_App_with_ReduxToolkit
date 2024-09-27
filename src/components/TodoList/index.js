import { Col, Row, Input,Space, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo';
import { todoSlice } from './todoSlice';
import { todoRemainingSelectors } from '../../redux/selectors';


export default function TodoList() {

  const [todoName, SetTodoName] = useState('');
  const [priority, setPriority] = useState('Medium')


  const todoList = useSelector(todoRemainingSelectors)
  
  const dispatch = useDispatch();


  const handleAddButton = () => {
    if (todoName.trim() === '') {
      alert('Input is empty')
    } else {
      dispatch(todoSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority
      }));
      setPriority('Medium');
      SetTodoName('');
    }
    
  };
  

  const handleInputChange = (e) =>{
      SetTodoName(e.target.value)
  }

  const handlePriorityChange = (value) =>
  {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        
        {todoList.map(
          todo => <Todo 
          key={todo.id}
          id={todo.id}
          name={todo.name} 
          priority={todo.priority} 
          completed={todo.completed}/>  
        )}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }} compact="true">
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}


