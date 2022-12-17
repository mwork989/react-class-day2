
import './App.css';
import ComponentA from './ComponentA';
import React from 'react'
// import EmployeeClassComponent from './EmployeeC';
// import EmployeeFuncEs5Component from './EmployeeF';
// import EmployeeFuncEs6Component from './EmployeeFES6';
// import Posts from './Posts';

export const orgContext = React.createContext();
export const courseContext = React.createContext();

function App() {
  return (
    <div >
      {/* <h2 >React training day2</h2>
        <EmployeeClassComponent name="david" today="sunday" age="35"/>
        <EmployeeFuncEs5Component name="simon es5" age="26"/>
        <EmployeeFuncEs6Component name="maria es6" age="40"/> */}
      {/* <Posts/> */}

      <orgContext.Provider value={'hey this is from App component'}>
        <courseContext.Provider value={'react'}>
          <ComponentA />
        </courseContext.Provider>
      </orgContext.Provider>

    </div>
  );
}

export default App;
