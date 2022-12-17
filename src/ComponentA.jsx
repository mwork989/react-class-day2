import ComponentB from "./ComponentB"

const ComponentA = () => {
    return (
        <div style={{border:'1px solid red', padding:'20px'}}>
        <p>Component A</p>
        <ComponentB/>
        </div>
    )
}

export default ComponentA