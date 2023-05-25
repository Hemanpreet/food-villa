import React from "react";
class ProfileClass extends React.Component{
constructor(props){
    super(props);
    // to create state
    this.state={
       userInfo:{
            name:"Dummy name",
            location:"Dummy location"
        }
    }
}
async componentDidMount(){
    const data=await fetch("https://api.github.com/users/Hemanpreet")
    const json=await data.json();
    this.setState({
        userInfo:json,
    })
}

    render(){
    return(
        <div>
        <h1>Profile from class based component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Type: {this.state.userInfo.type}</h2>
        </div>
    
    );
}
}
export default ProfileClass;