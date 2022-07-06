import {Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Todos from '../pages/Todos';
// import

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Todos/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
