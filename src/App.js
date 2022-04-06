import './App.css';
import ClassComponent from './components/ClassComponent';
import { FunctionalComponent } from './components/FunctionalComponent';
import { Hello } from './jsx/Hello';
import Greet from './props/Greet';

function App() {
  return (
    <div className="App">
     {/* <FunctionalComponent/>
     <ClassComponent/>
     <Hello/> */}
     <Greet name='Asadbek' lastName='Sobirov'>
       <p>This is children props</p>
     </Greet>
     <Greet name='Hayrulla' lastName='Ahmedov' />
     <Greet name='Oxunjon' lastName='Ramatov'/>
    </div>
  );
}

export default App;
