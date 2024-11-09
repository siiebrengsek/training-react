import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import SearchBar from "../Elements/Button/Search";
import Title from "./Title";
import Cookies from "js-cookie";
import CardProduct from "../Elements/Input/CardProduct";
import Products from "./Products";

const SideBar =()=>{
    const products = [
        {id: 1, title: "Dimsum Ayam", price: 'Rp. 3.000'},
        {id: 2, title: "Dimsum Mentai", price: 'Rp. 20.000'},
        {id: 3,  title: "Chili Oil", price: 'Rp. 3.000'}
    ];
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove('session')
        navigate('/login')
    }
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
            <main className="flex-1 p-6 ">
                <div className="flex justify-between items-center">
                    <Title className="text-lg">Welcome to your dashboard</Title>
                    <Button className="px-4 py-2 bg-blue-500 text-white rounded">Add your cart</Button>
                </div>
                <section className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                            <Products />
                        </div>
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                            <h3 className="font-bold">Dimsum
                                Mentai
                            </h3>
                            <p>Some content for card 2.</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded hover:bg-gray-200">
                            <h3 className="font-bold">Chili Oil</h3>
                            <p>Some content for card 3.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SideBar;