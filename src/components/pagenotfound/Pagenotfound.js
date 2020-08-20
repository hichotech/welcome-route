import React from "react"
import Page404image from "./../images/404-not-found.jpg"
import "./styles/PNFstyle.css"

class Pagenotfound extends React.Component{
    render(){
        
        return (

        
        <div className="Pagenotfound">
           <img src={Page404image} alt="Pge not found"/>
           <br/> 
            Page not found !!
            </div>
   ) }
}
export default Pagenotfound