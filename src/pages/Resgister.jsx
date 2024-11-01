import Button from "../components/Elements/Button";
import Input from "../components/Elements/Input/Input";
import Title from "../components/Fragments/Title";

const Register = () => {
    return (
        <div>
            <div className="bg-sky-300 w-[600px] px-14 py-36 m-5 flex flex-col gap-y-5 text-black drop-shadow-md rounded-lg">
            <Title />
            <Input label="Front Name" type="text" placeholder="front name" />
            <Input label="Last Name" type="text" placeholder="last name" />
            <Input label="Email" type="email" placeholder="Email" />
            <Input label="Password" type="password" placeholder="Password" />
            <Input label="re-Password" type="password" placeholder="Password" />
                <div className="flex flex-row justify-between">
                    <p className="font-semibold">Have account?</p>
                    <p className="text-blue-500 font-semibold">Login</p>
                </div>
            <Button>Register</Button>
        </div>
        </div>
    );
};
export default Register;