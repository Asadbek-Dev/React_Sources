import './App.css';
import ClassComponent from './components/ClassComponent';
import { FunctionalComponent } from './components/FunctionalComponent';
import { Hello } from './jsx/Hello';

function App() {
  return (
    <div className="App">
     {/* <FunctionalComponent/>
     <ClassComponent/> */}
     <Hello/>
    </div>
  );
}

export default App;
