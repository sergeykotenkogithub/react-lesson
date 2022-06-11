
import './App.css';
import Message  from './Message';

function App() {
  const nameProject = 'React Project';
  return (
    <div className="App container my-0 mx-auto">
        <Message nameProject={nameProject}/>
        <p className='text-2xl'>Text here</p>
    </div>
  );
}

export default App;
