import React from "react";

export class Login extends React.Component{

    handleSubmit(e){
        //onSubmit={(e) => this.handleSubmit(e)}
    }

    render() {
        return (
                <div className={"verticalyCentered smallForm"}>
                    <div className={"background bg-login"}><div className="black-bg"></div></div>
                    <div className={"movedUp formWrapper"}>
                        <p className="darkFormCaption">Login</p>
                        <form method={"POST"} action={"/login"}>
                            <input type="text" className={"darkFormInput"} name="username" placeholder="Username" autoComplete="off" />
                            <input type="password" className={"darkFormInput"} name="password" placeholder="Password" autoComplete="off"/>
                            <input type="submit" className={"submitButton"} value={"ENTER"}/>
                            <span className={"formSpan"}><a href="#">Lost Your password?</a></span>
                        </form>
                    </div>
                </div>

        )
    }
}