import { Outlet } from "react-router-dom"
import SideBar from "../components/Fragments/SideBar"
import { useState } from "react";


const HomeRoot = () => {

  const [keyword, setKeyword] = useState('');

  console.log('keyword', keyword)

  return (
    <div className="flex flex-row">
      <SideBar keyword={keyword} setKeyword={setKeyword} />
      <div className="p-4 flex-1 bg-slate-100">
        <Outlet keyword={keyword} />
      </div>
    </div>
  )
}

export default HomeRoot;
