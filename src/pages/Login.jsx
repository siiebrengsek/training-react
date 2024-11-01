import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Fragments/Title";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleLogin = () => {
        if (form.email === 'asd' && form.password === 'asd') {
            Cookies.set('session', form.email);
            navigate('/');
        }
        else {
            alert('Wrong email or password');
        }
    }
    const register = () => {
        navigate('/register');
    }

    const handleChange = (formKey) => (e) => {
        setForm({
            ...form,
            [formKey]: e.target.value
        });
    }

    return (
        <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input
                label="Email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange('email')}
            />
            <Input
                label="Password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange('password')}
            />
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Dont have account?</p>
                    <div className="cursor-pointer text-blue-500 font-semibold" onClick={register}>Register.</div>
                </div>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default Login;
