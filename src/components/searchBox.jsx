import { useState, useEffect, useRef } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  
  // Reference for the input DOM element (for auto-focus)
  const inputRef = useRef(null);

  // Reference for tracking renders without causing infinite re-render loops
  const renderCount = useRef(0);

  // Increment render count on every render pass
  renderCount.current += 1;

  // Automatically focus the input element once when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 0', borderRadius: '8px' }}>
      <h2>Search Box Component</h2>
      <input 
        ref={inputRef}
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Type to search..." 
      />
      <p>Searching for: <em>{query || 'Nothing typed yet'}</em></p>
      <p><small>Component Render Count: {renderCount.current}</small></p>
    </div>
  );
}