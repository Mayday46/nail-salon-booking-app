
import { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className = "flex items-center justify-center min-h-screen bg-gray-100">
            <div className = "w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
                <h2 className = "text-center font-bold text-2xl"> Sign up </h2>


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
                        <label className ="block mb-2 text-sm font-medium text-gray-700">
                            Password:
                        </label>

                        <input 
                            className = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type = "password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = " Enter your password"
                            required
                        />
                    </div>

                </form>

            </div>
            
        </div>
    );
}

export default Register;