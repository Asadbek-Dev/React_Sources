import './App.css';
import ClassComponent from './components/ClassComponent';
import { FunctionalComponent } from './components/FunctionalComponent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './Conditional Rendering/UserGreeting';
import ComponentC from './Context/ComponentC';
import { UserProvider } from './Context/userContext';
import ClassClick from './Events/ClassClick';
import EventBind from './Events/EventBind';
import FunctionClick from './Events/FunctionClick';
import FormHandling from './Form/FormHandling';
import { Hello } from './jsx/Hello';
import Greet from './props/Greet';
import Counter from './State/Counter';
import Message from './State/Message';

function App() {
  return (
    <div className="App">
      <UserProvider value='Asadbek' >
      <ComponentC/>
      </UserProvider>
      
      {/* Components */}

    {/* <ParentComponent/> */}
     {/* <FunctionalComponent/>
     <ClassComponent/>
     <Hello/> */}


     {/* Props  */}

     {/* <Greet name='Asadbek' lastName='Sobirov'>
       <p>This is children props</p>
     </Greet>
     <Greet name='Hayrulla' lastName='Ahmedov' />
     <Greet name='Oxunjon' lastName='Ramatov'/> */}


     {/* State */}

     {/* <Message/> */}
     {/* <Counter/> */}

     {/* Events */}

     {/* <ClassClick/>
     <FunctionClick/> */}
     {/* <EventBind/> */}

     {/* Conditional Rendering */}

     {/* <UserGreeting/> */}


     {/* Form */}
     {/* <FormHandling/> */}

    </div>
  );
}

export default App;
