import {Routes, Route} from 'react-router-dom';
import Chats from '../pages/Chats';
import Messages from '../pages/Messages';
import NotFound from '../pages/NotFound';
// import

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Chats/>} />
      <Route path={'/messages/:id'} element={<Messages/>}></Route>
      <Route path={'*'} element={<NotFound/>}></Route>
    </Routes>
  );
}

export default App;
