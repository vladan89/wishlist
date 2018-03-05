import React from "react";
import ReactDOM from "react-dom";

import MDCreate from "react-icons/lib/fa/plus";
import IkeaProductParser from "../scripts/parser/IkeaProductParser";

export class CreateItemDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name:"",price:"", currency:"", note:"", link:"", photo:"" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getItemContent = this.getItemContent.bind(this);
        this.onChange = this.onChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.setState({ name:"", price:"", currency:"", note:"", link:"", photo:"" });
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    getItemContent(e){
        var link = e.target.value;
        var httpCheck = link.startsWithHttp();
        var httpsCheck = link.startsWithHttps();
        var prependedLink = "";
        if(httpCheck === false && httpsCheck === false) prependedLink = link.prependHttp();
        else prependedLink = link;

        var parser = new IkeaProductParser(prependedLink);
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
        }, 1000);


    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onItemCreate(this.state);
        window.location = "#";
        this.setState({ name:"", price:"", currency:"", note:"", link:"", photo:"" });
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
                    <div className={"modalContainer"}>
                        <a href="#" title="Close" className="close" onClick={this.closeModal}>X</a>

                        <p className="dialogTitle blue">Create new {this.props.purpose}</p>

                        <form>

                            <p className={"wishlistItemSmallRow"}>Link</p>

                            <input type="text"
                                   placeholder={"link"}
                                   className={"field"}
                                   name={"link"}
                                   ref={(ref) => this.link = ref}
                                   value={this.state.link}
                                   onChange={this.onChange}
                                   onInput={this.getItemContent} />

                            <p className={"wishlistItemSmallRow"}>Note</p>

                            <input type="text"
                                   placeholder={"note"}
                                   className={"field"}
                                   name={"note"}
                                   ref={(ref) => this.note = ref}
                                   value={this.state.note}
                                   onChange={this.onChange} />

                            <button onClick={this.handleSubmit} className="blueButton modalButton blue">Create</button>
                        </form>

                        {(this.state.name!="" && this.state.price!="" && this.state.currency!="" ) &&
                            <div id="preview" >
                                <div className="previewTop">
                                    <img src={this.state.photo} alt="Preview image"/>
                                </div>
                                <div className="previewBottom">
                                    <p className="wishlistItemName">{this.state.name}</p>
                                    <p className="wishlistItemName">{this.state.price} {this.state.currency}</p>
                                </div>
                                <div className="clear"></div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        )
    }
};