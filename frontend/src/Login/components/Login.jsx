import {useState} from "react";
import "./Login.css"
import Register from "../../Register/components/Register";
export default function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const onChangeLoginForm = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`Username: ${loginForm.username} and Password: ${loginForm.password}`);

        setLoginForm({
            username: '',
            password: '',
        });
    }

    return (
        <div className="login-container flex items-center justify-center h-screen">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome back!</h2>
                <form className="space-y-4" onSubmit={onSubmit} autoComplete={"off"}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Email Address</label>
                        <input type="email" id="username" name="username" className="mt-1 block w-full px-3 py-2.5 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50" value={loginForm.username || ""} onChange={onChangeLoginForm} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2.5 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50" value={loginForm.password || ""} onChange={onChangeLoginForm} required />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-blue-500 focus:ring-0 rounded-sm" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-0 dark:text-blue-400">Forgot your password?</a>
                    </div>
                    <button type="submit" className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50">Sign In</button>
                </form>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Don't have an account? <a href="#" className="text-blue-500 hover:underline focus:outline-none focus:ring-0 dark:text-blue-400">Sign up here</a></p>
            </div>
            <Register/>
        </div>
    );
}
