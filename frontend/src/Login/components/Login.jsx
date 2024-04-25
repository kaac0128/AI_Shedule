import {useState} from "react";

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        user: '',
        password: '',
    });

    const onChangeLoginForm = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    const onClick = () => {
        alert(`User: ${loginForm.user} and Password: ${loginForm.password}`);
    }

    return (
        <form>
            <>
                <label>User</label>
                <input type={"text"} name={"user"} onChange={onChangeLoginForm}/>
            </>
            <>
                <label>Password</label>
                <input type={"text"} name={"password"} onChange={onChangeLoginForm}/>
            </>
            <>
                <button onClick={onClick}>Sing in</button>
            </>
        </form>
    );
}
