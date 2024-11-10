import { useState } from "react";
import SearchBar from "../components/Elements/Button/Search";
import ProductCard from "../components/Fragments/ProductCard";

const exampleStaticData = [
    {
        id: 1,
        imageUrl: '/images/dimsum-ayam.jpg',
        title: 'Dimsum Ayam',
        desc: 'Ada varian toping Wortel, Jamur, Crabstick, Tuna, dan Smokebeef',
        price: '3.000',
    },
    {
        id: 2,
        imageUrl: '/images/dimsum-mentai.jpg',
        title: 'Dimsum Mentai',
        desc: 'Dimsum yg dibakar dengan taburan saus mentai...',
        price: '20.000',
    },
]

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const exampleStaticDataFiltered = exampleStaticData.filter(singleData => {
        return (singleData.title.toLowerCase()).includes(keyword) || (singleData.desc.toLowerCase()).includes(keyword);
    });
    return (
        <div className="flex flex-col">
            <SearchBar placeholder="search" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <div className="flex flex-row gap-5">
                {/* <ProductCard data={exampleStaticData[0]} /> */}
                {exampleStaticDataFiltered.map((singleData) => {
                    return (
                        <ProductCard key={singleData.id} {...singleData} />
                    )
                })}
            </div>
        </div>
    );
};

export default Home;
