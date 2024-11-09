import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Fragments/Title";
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();

    const [form , setForm] = useState({
        frontName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
    })
    const register = () => {
        navigate("/");
    }
    const login = () => {
        navigate("/login");
    }
    const handleChange = (formKey) => (e) => {
        setForm({
            ...form,
            [formKey]: e.target.value
        });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input
                label="Front Name"
                type="text"
                value={form.frontName}
                placeholder="front name"
                onChange={handleChange("frontName")}
            />
            <Input
                label="Last Name"
                type="text"
                value={form.lastName}
                placeholder="last name"
                onChange={handleChange("lastName")}
            />
            <Input
                label="Email"
                type="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange("email")}
            />
            <Input
                label="Password"
                type="password"
                value={form.password}
                placeholder="Password"
                onChange={handleChange("password")}
            />
            <Input
                label="re-Password"
                type="password"
                value={form.rePassword}
                placeholder="Password" 
                onChange={handleChange("rePassword")}
            />
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Have account?</p>
                    <div className="cursor-pointer text-blue-500 font-semibold" onClick={login}>Login</div>
                </div>
            <Button onClick={register}>Register</Button>
        </div>
        </div>
    );
};
export default Register;
