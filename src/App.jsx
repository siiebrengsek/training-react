import { useState } from 'react'
import './index.css'
// import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/ResgisterForm'
import HomePage from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (    
    <div className="bg-white-200 flex justify-center flex-col w-full h-screen items-center text-lg text-red-500 text-black ">
       {/* <LoginForm /> */}
       {/* <RegisterForm /> */}
       <HomePage />
    </div>       
  )
}

export default App
