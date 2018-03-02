import React from "react";

export class Login extends React.Component{

    handleSubmit(e){
        //onSubmit={(e) => this.handleSubmit(e)}
    }

    render() {
        return (
            <div>
                <p className="formCaption">Login</p>
                <form method={"POST"} action={"/login"} className={"form"}>
                    <input type="text" name="username" placeholder="Username" autoComplete="off" />
                    <input type="password" name="password" placeholder="Password" autoComplete="off"/>
                    <input type="submit" value={"ENTER"}/>
                </form>
            </div>
        )
    }
}