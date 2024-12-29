import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../shared/store/store.ts";
import {useEffect} from "react";
import {login} from "../model/LoginAPI.ts";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../../../shared/store/slices/authSlice.ts";

export const useLoginViewModel = () => {
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [dispatch]);

    const handleLogin = async (userName: string, password: string,) => {
        const loginResult = await login(userName, password);
        if (loginResult) {
            dispatch(loginSuccess({userRole: "admin"}));
            navigate("/");
        } else {
            window.alert("로그인 실패");
        }
    };

    return {
        handleLogin,
    };
};
