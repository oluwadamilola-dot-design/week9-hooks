import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>Counter Component</h2>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '8px' }}>Reset</button>
    </div>
  );
}