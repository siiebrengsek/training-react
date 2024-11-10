import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import CardProduct from "../Elements/Input/CardProduct";
import { useEffect, useState } from "react";



const SideBar = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const handleChangePath = (path) => {
        navigate(path);
    }

    const logout = () => {
        Cookies.remove('session')
        navigate('/login')
    }

    useEffect(() => {
        const fungsiUntukMemanggilDataUserYangSudahLogin = async () => {
            try {
                const idUserYangLogin = Cookies.get('session');
                // "https://jsonplaceholder.typicode.com/users/3"
                const raw = await fetch(`https://jsonplaceholder.typicode.com/users/${idUserYangLogin}`)
                const dataUserYangLogin = await raw.json();
                setUser(dataUserYangLogin);
                console.log(dataUserYangLogin);
            } catch (error) {
                console.log(error);
            }
        }
        fungsiUntukMemanggilDataUserYangSudahLogin();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <div>
                <aside className="flex h-screen w-64 bg-white shadow-md">
                    <div className="p-4">
                        <h1 className="text-xl font-bold">DASHBOARD
                        </h1>
                        <nav>
                            <ul>
                                <li className="p-4 hover:bg-gray-200" onClick={() => handleChangePath('/')}>Home</li>
                                <li className="p-4 hover:bg-gray-200" onClick={() => handleChangePath('profile')}>Profile</li>
                                <li className="p-4 hover:bg-gray-200" onClick={() => handleChangePath('setting')}>Settings</li>
                                <li className="p-4 hover:bg-gray-200"><div className="cursor-pointer" onClick={logout}>Logout</div></li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SideBar;
