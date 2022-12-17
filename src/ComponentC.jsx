import { useContext } from "react";
import {orgContext, courseContext} from './App'

const ComponentC = () => {

    const orgnisation = useContext(orgContext);
    const course = useContext(courseContext)
    return (
        <div style={{border:'1px solid green', padding:'20px'}}>
                <p>Component c</p>
                <p>{orgnisation}</p>
                <p>{course}</p>
        </div>
    )
}

export default ComponentC