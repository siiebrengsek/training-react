import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Title";

const LoginForm = () => {
    return (
        <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input label="Email" type="email" placeholder="Email" />
            <Input label="Password" type="password" placeholder="Password" />
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Dont have account?</p>
                    <p className="text-blue-500 font-semibold">Register.</p>
                </div>
            <Button>Login</Button>
        
        </div>
    );
};

export default LoginForm;