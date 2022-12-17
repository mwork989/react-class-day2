import ComponentC from "./ComponentC"

const ComponentB = () => {
    return (
        <div style={{border:'1px solid blue', padding:'20px'}}>
        <p>Component B</p>
        <ComponentC/>
        </div>
       
    )
}

export default ComponentB