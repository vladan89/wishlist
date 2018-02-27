import React from "react";
import FaFacebook from "react-icons/lib/fa/facebook-square";
import FaTwitter from "react-icons/lib/fa/twitter-square";
import FaGooglePlus from "react-icons/lib/fa/google-plus-square";
import FaGift from "react-icons/lib/go/gift";

export const Header = () => (
    <div className={"header"}>
        <div className="headerTop">
            <FaGift className="headerIcon" size={36} fill={"#ffffff"}/>
            <span className={"appName"}>Wish List</span>
        </div>
        <p className="socialIcons">Share on
            <FaFacebook className="icon" size={25} fill={"#3B5998"}/>
            <FaTwitter className="icon" size={25} fill={"#1e80e9"}/>
            <FaGooglePlus className="icon" size={25} fill={"#e02525"}/>
        </p>
    </div>
)