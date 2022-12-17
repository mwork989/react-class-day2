import { Component } from 'react';
import './Employee.css';


const EmployeeClassComponentStyle ={
    border:"1px solid red",
    backgroundColor:"beige",
    margin:"10px",
    padding:"10px",
    borderRadius:"5px"
}


class EmployeeClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            designation: "web developer",
            address: "blr"
        }
        // binding is necessary to provide this context in callback
        this.changeDesignation = this.changeDesignation.bind(this)
    }

    changeDesignation(event,val){
        console.log(event)
        console.log(val)
        this.setState({
            designation: "technical lead"
        })
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                designation: "senior web developer2"
            })
        }, 2000)

    }

    render() {
        const { name, age } = this.props;
        let eligibilityForPosition=null;
        if (age > 30) {
            eligibilityForPosition = <p> you are eligible for position</p>

        } else {
            eligibilityForPosition = <p> you are not eligible for position</p>
        }

        return (
            <div style={EmployeeClassComponentStyle}>
                <h1 style={{color:'red',backgroundColor:'orange',border:'1px solid red'}}>Employee class Component </h1>
                <p className="parac-style" >{name}</p>
                <p>{this.props.today}</p>
                <p>{this.state.designation}</p>
                <p>{this.state.address}</p>
                <label>Eligibility:</label><span>{eligibilityForPosition}</span>
                <button onClick={(event) => this.changeDesignation(event,'test')}>Change designation</button>
                <button onClick={this.changeDesignation.bind(this,'test')}>Change designation 2</button>
            </div>

        )
    }
}

export default EmployeeClassComponent;


