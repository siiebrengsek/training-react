import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Fragments/Title";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === 'asd' && password === 'asd') {
            Cookies.set('session', email);
            navigate('/');
        }
        else {
            alert('Wrong email or password');
        }
    }
    const register = () => {
        navigate('/register');
    }
    return (
        <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>setPassword(e.target.value)}
            />
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Dont have {email} account?</p>
                    <div className="cursor-pointer text-blue-500 font-semibold" onClick={register}>Register.</div>
                </div>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default Login;
