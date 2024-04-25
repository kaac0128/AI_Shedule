import {useState} from "react";
import './Login.css';

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        user: '',
        password: '',
    });

    const onChangeLoginForm = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`User: ${loginForm.user} and Password: ${loginForm.password}`);
    }

    return (
        <form className={"login-container-form"} onSubmit={onSubmit}>
            <div className={"login-content-input"}>
                <label className={"login-label"}>User</label>
                <input className={"login-input"} type={"text"} value={loginForm.user || ""} name={"user"} placeholder={"Username"} onChange={onChangeLoginForm}/>
            </div>
            <div className={"login-content-input"}>
                <label className={"login-label"}>Password</label>
                <input className={"login-input"} type={"text"} value={loginForm.password || ""} name={"password"} placeholder={"Password"} onChange={onChangeLoginForm}/>
            </div>
            <>
                <button className={"send-button"} type={"submit"}>Sing in</button>
            </>
        </form>
    );
}
