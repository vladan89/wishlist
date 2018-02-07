import React from "react";
import FaFacebook from "react-icons/lib/fa/facebook-square";
import FaTwitter from "react-icons/lib/fa/twitter-square";
import FaGooglePlus from "react-icons/lib/fa/google-plus-square";

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <p className="pageTitle">Wish List</p>
                <p className="socialIcons">Share on
                    <FaFacebook className="icon" size={25} fill={"#0037ff"}/>
                    <FaTwitter className="icon" size={25} fill={"#1e80e9"}/>
                    <FaGooglePlus className="icon" size={25} fill={"#e02525"}/>
                </p>
            </div>
        );
    }
}