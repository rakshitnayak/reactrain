import './App.css';
import Header from './components/functioncomponents/Header';
import Content  from './components/functioncomponents/Content';
import Amount from './components/Amount';
import Votingparent from './components/functioncomponents/Votingparent';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Amount/>
      <Votingparent/>
    
     
    </div>
  );
}

export default App;


// The <Provider> component makes the Redux store available to any nested
//components that need to access the Redux store.
// import {Provider} from 'react-redux'
// import Store from './components/ReactRedux/Store'
// import Medical from './components/ReactRedux/Medical';
// import {MedicalHook} from './components/ReactRedux/MedicalHook'

// const studObj = {
//   stud_name: "Rahul Sharma",
//   stud_rollno: 121,
//   stud_course: "BCA",
//   stud_fees: 45678.45
// }
// function App() {
//   return (
//     <Provider store={Store}>
//       <>
//       <Medical />
//       <MedicalHook />
//       </>
//     </Provider>
//   );
// }
// export default App;
