import React from "react";

export class Login extends React.Component{

    handleSubmit(e){
        //onSubmit={(e) => this.handleSubmit(e)}
    }

    render() {
        return (
                <div className={"verticalyCentered formDiv"}>
                    <div className={"background bg-login"}><div className="black-bg"></div></div>
                    <div className={"movedUp"}>
                        <p className="formCaption">Login</p>
                        <form method={"POST"} action={"/login"} className={"form"}>
                            <input type="text" name="username" placeholder="Username" autoComplete="off" />
                            <input type="password" name="password" placeholder="Password" autoComplete="off"/>
                            <input type="submit" value={"ENTER"}/>
                        </form>
                    </div>
                </div>

        )
    }
}