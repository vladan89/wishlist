import React from "react";
export const Footer = (props) => {
    return (
        <div className="auto-flex-holder footerBottom">
            <footer className="flex-container">
             <span className="flex-item">
              <p className="main-title center caps">Mobile Version</p>
              <p className="item-about center">Google Play</p>
              <p className="item-about center"> Absolutely Free </p>
             </span>
                <span className="flex-item">
              <p className="main-title center caps">Dev Team</p>
              <p className="item-about center"> Vladan Vulović </p>
              <p className="item-about center">Ivan Vulović</p>
             </span>
            </footer>
            <footer className="center">
                <ul>
                    <li>
                        <a href="http://facebook.com" target="_blank"><img src="/img/social/fb.png" alt="Facebook icon"/> </a>
                        <a href="http://twitter.com" target="_blank"><img src="/img/social/twitter.png" alt="Twitter icon"/></a>
                        <a href="http://instagram.com" target="_blank"><img src="/img/social/ig.png" alt="Instagram icon"/></a>
                        <a href="http://pinterest.com" target="_blank"><img src="/img/social/pinterest.png" alt="Pinterest icon"/></a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}