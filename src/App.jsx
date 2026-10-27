import Counter from './components/counter';
import TodoList from './components/TodoList';
import ProfileCard from './components/Profilecard';
import SearchBox from './components/searchbox';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <h1>React Hooks Assignment</h1>
      <Counter />
      <TodoList />
      <ProfileCard />
      <SearchBox />
    </div>
  );
}

export default App;