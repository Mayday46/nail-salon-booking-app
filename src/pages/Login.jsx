import { useState } from 'react';
import '../styles/login.css'; // We'll put styles here

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className = "flex items-center justify-center min-h-screen bg-gray-100">
            <div className ="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg" >
                <h2 className = "mb-6 text-2xl font-bold text-center">
                    Login
                </h2>

                <form className = "space-y-4">
                    <div>
                        <label className = "block mb-2 text-sm font-medium text-gray-700">
                            Username:
                        </label>
                        <input
                            className = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type = "text"
                            value = {username}
                            onChange = {(e) => setUsername(e.target.value)}
                            placeholder = "Enter your username"
                            required
                        />
                    </div>

                    <div>
                        <label className = "block mb-2 text-sm font-medium text-gray-700">
                            Password:
                        </label>
                        <input

                            className = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type = "password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = "Enter your password"
                            required
                        />
                    </div>

                    <div className = "flex items-center justify-between">
                        <div className = "flex items-center">
                            <input
                                type = "checkbox"
                                checked = {rememberMe}
                                onChange = {(e) => setRememberMe(e.target.checked)}
                                className = "mr-2 h-4 w-4" // Added spacing + consistent
                            />
                            <label className = "text-sm"> Remember me </label>
                        </div>
                        <a href = "/forgot-Password" className = "text-sm text-blue-500 hover:underline">
                                Forgot Password?
                            </a>
                    </div>


                    <div>
                        <button
                            type = "submit"
                            className = "w-full px-4 py-2 font-semibold text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </div>

                    <div className = "text-center">
                        <p className = "text-sm text-center text-gray-600">
                            Don't have an account? <a href = "/Register" className = "text-blue-500 hover:underline">Sign up</a>
                        </p>
                    </div>

                </form>

            </div>

        </div>
    )

};

export default Login;
