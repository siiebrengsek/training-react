// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="p-4 hover:bg-gray-200"><a href="#">Home</a></li>
                        <li className="p-4 hover:bg-gray-200"><a href="#">Profile</a></li>
                        <li className="p-4 hover:bg-gray-200"><a href="#">Settings</a></li>
                        <li className="p-4 hover:bg-gray-200"><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Konten Utama */}
            <main className="flex-1 p-6">
                <header className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Welcome to Your Dashboard</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Add New</button>
                </header>

                <section className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 shadow rounded">
                            <h3 className="font-bold">Card 1</h3>
                            <p>Some content for card 1.</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded">
                            <h3 className="font-bold">Card 2</h3>
                            <p>Some content for card 2.</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded">
                            <h3 className="font-bold">Card 3</h3>
                            <p>Some content for card 3.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;