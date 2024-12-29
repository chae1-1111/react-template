import {useLoginViewModel} from "../viewModel/useLoginViewModel.ts";
import {useRef} from "react";

const Login = () => {
    const {handleLogin} = useLoginViewModel();

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const onClickLoginButton = async () => {
        const userName = userNameRef.current?.value;
        const password = passwordRef.current?.value;

        if (userName == null || userName.trim().length === 0 || password == null || password.trim().length === 0) {
            window.alert("아이디와 비밀번호를 모두 입력해주세요");
        } else {
            await handleLogin(userName, password);
        }
    }

    return (
        <>
            <input type="text" name="userName" placeholder="아이디를 입력하세요" ref={userNameRef}/>
            <input type="password" name="password" placeholder="비밀번호를 입력하세요" ref={passwordRef}/>
            <button onClick={onClickLoginButton}>로그인</button>
        </>
    );
};

export default Login;
