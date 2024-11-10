import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import SearchBar from "../Elements/Button/Search";
import Title from "./Title";
import Cookies from "js-cookie";
// import CardProduct from "../Elements/Input/CardProduct";
import Products from "./Products";
import { useEffect, useState } from "react";

const SideBar =()=>{

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
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
                        <SearchBar type="text" placeholder="search"></SearchBar>
                        <nav>
                            <ul>
                                <li className="p-4 hover:bg-gray-200"><a href="#">Home</a></li>
                                <li className="p-4 hover:bg-gray-200"><a href="#">Profile</a></li>
                                <li className="p-4 hover:bg-gray-200"><a href="#">Settings</a></li>
                                <li className="p-4 hover:bg-gray-200"><div className="cursor-pointer" onClick={logout}>Logout</div></li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center">
                    <Title className="text-lg">Welcome {user?.name}</Title>
                    <Button className="px-4 py-2 bg-blue-500 text-white rounded">Add your cart</Button>
                </div>
                <section className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                        <a href="#">
                            <Products.dimsumAyam />
                        </a>
                        </div>
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                            <a href="#">
                                <Products.dimsumMentai  />
                            </a>
                        </div>
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                            <a href="#">
                                <Products.chiliOil />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SideBar;
