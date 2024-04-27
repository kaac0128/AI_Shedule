import {useState} from "react";
import "./Register.css";

export default function Register() {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        password: "",
        password2: "",
        email: "",
        first_name: "",
        last_name: ""
    });

    const formLabelStyle = "block text-sm font-medium text-gray-900 dark:text-gray-700";
    const formInputStyle = "mt-1 block w-full px-3 py-2.5 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50";

    const onChangeRegisterForm = (e) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Email: ${registerForm.email} and Password: ${registerForm.password}`);

        setRegisterForm({
            username: "",
            password: "",
            password2: "",
            email: "",
            first_name: "",
            last_name: ""
        });
    }

    return (
        <div className={"register-container"}>
            <form className={"register-form"} onSubmit={onSubmit} autoComplete={"off"}>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>username</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"username"} name={"username"}
                           value={registerForm.username || ""} onChange={onChangeRegisterForm}/>
                </div>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>password</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"password"} name={"password"}
                           value={registerForm.password || ""} onChange={onChangeRegisterForm}/>
                </div>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>password2</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"password2"} name={"password2"}
                           value={registerForm.password2 || ""} onChange={onChangeRegisterForm}/>
                </div>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>email</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"email"} name={"email"}
                           value={registerForm.email || ""} onChange={onChangeRegisterForm}/>
                </div>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>first_name</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"first_name"} name={"first_name"}
                           value={registerForm.first_name || ""} onChange={onChangeRegisterForm}/>
                </div>
                <div className={`register-content ${formLabelStyle}`}>
                    <label className={"register-label"}>last_name</label>
                    <input className={`register-input ${formInputStyle}`} type={"text"} id={"last_name"} name={"last_name"}
                           value={registerForm.last_name || ""} onChange={onChangeRegisterForm}/>
                </div>
            </form>
        </div>
    );
}
