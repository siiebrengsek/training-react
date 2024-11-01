import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Fragments/Title";
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();

    const [frontName, setFronName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const register = () => {
        navigate("/");
    }
    const login = () => {
        navigate("/login");
    }
    
    return (
        <div>
            <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input
                label="Front Name"
                type="text"
                value={frontName}
                placeholder="front name"
                onChange={(e) =>setFronName(e.target.value)}
            />
            <Input
                label="Last Name"
                type="text"
                value={lastName}
                placeholder="last name"
                onChange={(e) =>setLastName(e.target.value)}
            />
            <Input
                label="Email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) =>setEmail(e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                value={Password}
                placeholder="Password"
                onChange={(e) =>setPassword(e.target.value)}
            />
            <Input
                label="re-Password"
                type="password"
                value={Password}
                placeholder="Password" />
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
