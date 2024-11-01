import Button from "../Elements/Button";
import SearchBar from "../Elements/Button/Search";
import Title from "./Title";

const SideBar =()=>{
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
                                <li className="p-4 hover:bg-gray-200"><a href="#">Logout</a></li>
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
                            <h3 className="font-bold">Dimsum Ayam</h3>
                            <p>Some content for card 1.</p>
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