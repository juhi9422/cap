import React, {Component} from "react"
import datateam from "./DataTeam";
class Team extends Component{
    render(){
        return(
            <div className="team">
               
                {datateam.map(elem => <Associates key = {elem.id} img = {elem.img} title = {elem.title} role={elem.role}/>)}
                
            </div>
        )
    }
}

function Associates(props){
    return(
        <div className="assosiate">
        <div className="imgborder">
                    <img src={props.img} className="imageteam"></img>
                    </div>
                    <div className="imgcontent">
                    <h4 className="asohead">{props.title}</h4>
                    <p className="asop">{props.role}</p>
                    </div>
       
        </div>
        
        
    )
}

export default Team
