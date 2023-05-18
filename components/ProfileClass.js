import React from "react";
class ProfileClass extends React.Component{
constructor(props){
    super(props);
    // to create state
    this.state={
        count:0,
        count2:0
    }
}

    render(){
    return(
        <div>
        <h1>Profile from class based component</h1>
        <h2>Name: {this.props.name}</h2>
            <h3>Count state variable : {this.state.count}</h3>
            <h3>Count state variable 2 : {this.state.count2}</h3>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count2:2,
                })
            }}>Count</button>
        </div>
    
    );
}
}
export default ProfileClass;