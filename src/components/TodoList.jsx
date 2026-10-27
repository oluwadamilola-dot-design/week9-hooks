import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>Todo List Component</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new task..." 
      />
      <button onClick={addTodo} style={{ marginLeft: '8px' }}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: '8px' }}>
            {todo} 
            <button 
              onClick={() => deleteTodo(index)} 
              style={{ marginLeft: '12px', background: '#ff4d4d', color: 'white', border: 'none', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}