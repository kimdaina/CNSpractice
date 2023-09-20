import React from "react";
import ReactDOM from "react-dom/client";

function Login(){
    return(
        <div>
            <header>
                    <div id={"CNS"}>CNS
                        <div id={"HeaderB"}>
                            <button className={"ClearA"}>로그인</button>
                            <button className={"ClearA"}>회원가입</button>
                        </div>
                    </div>
            </header>

            <body>
                <div id={"Sq"}>
                    <div id={"Care"}> Care aNd Service </div>
                    <div id={"Login"}>로그인</div>

                    <div className={"border"}>
                        <div className={"idHeader"}> 아이디</div>
                        <input placeholder={"아이디를 입력하세요"}/>
                        <div className={"idHeader"} > 비밀번호</div>
                        <input placeholder={"비밀번호를 입력해 주세요"}/>
                    </div>

                        <button id={"idB"}>로그인</button>
                        <div id={"hover"}>계정이 없으신가요?</div>
                </div>
            </body>
        </div>
    );
}

export default Login;