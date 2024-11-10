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

    const handleLogin = async () => {
        try {
            const raw = await fetch('https://jsonplaceholder.typicode.com/users');
            const dataUsers = await raw.json();

            // jika email ada di antara data user
            const indexUser = dataUsers.findIndex((user) => user.email === form.email);
            console.log(dataUsers);
            console.log(indexUser);
            console.log(dataUsers[indexUser]);

            if (indexUser > -1) { // jika index user lebih dari -1 atau nemu
                const user = dataUsers[indexUser];
                if (form.password === user.username) {
                    Cookies.set('session', user.id);
                    navigate('/');
                } else {
                    alert('Wrong password');
                }
            } else {
                alert('Wrong email');
            }
        } catch (error) {
            console.log('error ketika mengambil data', error);
        }
        // if (form.email === 'asd' && form.password === 'asd') {
        //     // Cookies.set('session', form.email);
        //     // navigate('/');
        // }
        // else {
        //     alert('Wrong email or password');
        // }
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
           <div className="flex flex-col bg-sky-300 w-[600px] px-14 py-36 m-5 gap-y-5 text-black drop-shadow-md rounded-lg">
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
        </div>
    );
};

export default Login;
