
import { useState } from 'react';
import './Employee.css'

var EmployeeFunctionES5ComponentStyle ={
    border:"1px solid green",
    backgroundColor:"azure",
    margin:"10px",
    padding:"10px",
    borderRadius:"5px"
}




// in a functional component there is no this context 
function EmployeeFuncEs5Component(props){
    var eligibilityForPosition=null;

    // react hook use state definition for designation property
    var [designation, setDesignation] = useState('web developer');
    // react hook use state definition for address property
    var [address, setAddress] = useState('blr');
    // react hook use state definition for age property
    var [age, setAge] = useState('');

    var [course, setCourse] = useState({name:'react',sessions:10});

   
    function getNationality(){
        console.log("indian")
    }   

    if(age > 30 ){
        eligibilityForPosition =  <p> you are eligible for position</p>
    }else{
        eligibilityForPosition =  <p> you are not eligible for position</p>
    }

    function changeDesignation(){
        setDesignation('senior web developer')
    }



    
    function changeAddress(){
        setAddress('hyd')
      
    }

    function getAge(event){
        var value = event.target.value;
        setAge(value)
    }



    return     (
        
        <div style={EmployeeFunctionES5ComponentStyle} >
            <h1 style={{color:'green',backgroundColor:'lightgreen',border:'1px solid green'}}>Employee Function Es5 Component </h1>
            <p className='paraf-style'>{props.name}</p>
            <p>{designation}</p>
            <p>{address}</p>
            <button onClick={getNationality}>Get Nationality</button>
            <button onClick={changeDesignation}>Change designation</button>
            <button onClick={changeAddress}>Change Address</button>
            <input type="text" onChange={(event)=> getAge(event)} placeholder='Enter your age'/>
            <label>Eligibility:</label><span>{eligibilityForPosition}</span>
            <label>Age:</label><span>{age}</span>
            <h2>Courses Enrolled</h2>
            <p>CourseName : {course.name}</p>
            <p>Session: {course.sessions}</p>
        </div>
   
    )
}

export default EmployeeFuncEs5Component;