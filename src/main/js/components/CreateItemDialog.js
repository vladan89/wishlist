import React from "react";
import ReactDOM from "react-dom";

import MDCreate from "react-icons/lib/fa/plus";
import IkeaProductParser from "../scripts/parser/IkeaProductParser";

export class CreateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getItemContent = this.getItemContent.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        console.log(e.target.value);
        console.log(this.state);
    }

    getItemContent(e){
        var link = e.target.value;
        var parser = new IkeaProductParser(link);
        parser.parse();
        setTimeout(()=>{
            var data = JSON.stringify(parser);
            var obj = JSON.parse(data);
            console.log(obj);
            this.setState({
                name: $.trim(obj.name),
                price: $.trim(obj.price),
                currency: $.trim(obj.currency),
                link: obj.link,
                photo: obj.photo
            });
        },1000);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.onItemCreate(this.state);
        window.location = "#";
    }

    render() {
        return (
            <div>
                <a href="#createDialog" className={"createDialogLink"}>
                    <button className="button blueButton">
                        <MDCreate size={15} fill={"#ffffff"}/>
                    </button>
                    <span className={"middleHeightLink blue"}>Create {this.props.purpose}</span>
                </a>

                <div id="createDialog" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <p className="dialogTitle blue">Create new {this.props.purpose}</p>

                        <form>
                            <input type="text" placeholder={"link"} name={"link"} ref={"link"} className={"field"} onBlur={this.getItemContent}/>
                            <input type="text" placeholder={"note"} name={"note"} ref={"note"} className={"field"} onChange={this.onChange}/>
                            <button onClick={this.handleSubmit} className="blueButton modalButton blue">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};