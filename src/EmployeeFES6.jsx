
import { useState } from 'react';
import './Employee.css'

const EmployeeFunctionES6ComponentStyle = {
    border: "1px solid blue",
    backgroundColor: "skyblue",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px"
}




// in a functional component there is no this context 
const EmployeeFuncEs6Component = ({ name }) => {
    
    // react hook use state definition for designation property
    const [designation, setDesignation] = useState('web developer');
    // react hook use state definition for address property
    const [address, setAddress] = useState('blr');
    // react hook use state definition for age property
    const [age, setAge] = useState('');

    const [course, setCourse] = useState({name:'react',sessions:10});
    const getNationality = () => {
        console.log("indian")
    }

    const changeDesignation = ()=>{
        setDesignation('senior web developer')
    }



    
    const changeAddress  =()=>{
        setAddress('hyd')
      
    }

    const getAge = (event)=>{
        const value = event.target.value;
        setAge(value)
    }

    const changeCourse = (event)=>{
        let updatedCourse = {name:event.target.value,}
        
        console.log(updatedCourse);
        setCourse(course =>({
            ...course,
            ...updatedCourse
        }))
    }

    
    let eligibilityForPosition = (age > 30) ? <p> you are eligible for position</p>:
        <p> you are not eligible for position</p>



    return (
        <div style={EmployeeFunctionES6ComponentStyle}>
            <h1 style={{ color: 'blue', backgroundColor: 'lightblue', border: '1px solid blue' }}>Employee Function Es6 Component </h1>
            <button onClick={getNationality}>Get Nationality</button>
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
            <input type="text" name="course" value={course.name} onChange={(event)=>changeCourse(event)}/>
        </div>

    )
}

export default EmployeeFuncEs6Component;