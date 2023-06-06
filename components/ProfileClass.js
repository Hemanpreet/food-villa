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
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">Profile from class based component</div>
        <img className="p-5 m-2 border-blue-800 border-2"src={this.state.userInfo.avatar_url}/>
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">Name: {this.state.userInfo.name}</div>
        <div className="text-xl font-bold p-5 m-2 bg-blue-300">Type: {this.state.userInfo.type}</div>
        </div>
    
    );
}
}
export default ProfileClass;