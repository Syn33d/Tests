import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './Components/TodoList';
import TodoDetail from './Components/TodoDetail';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/detail/:id" element={<TodoDetail />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </Router>
  );
}

export default App;