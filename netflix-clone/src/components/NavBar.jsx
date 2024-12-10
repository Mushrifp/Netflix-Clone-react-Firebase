import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import {useAuth} from '../context/Context'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NavBar() {
 
   const {user , logOut} = useAuth()
 
    const navigate = useNavigate()

    const logOutHandle = async () =>{

        try {
            await logOut()
             toast.success("LogOut Successful!");
            navigate('/')
        } catch (error) {
           console.log(error)
        }
    }

  return (
      
      <div className="fixed flex justify-between items-center w-full p-4 bg-gradient-to-b from-black/70 to-transparent z-50">
  <Link to='/'>
    <img src={Logo} alt="Netflix Logo" className="h-10" />
  </Link>

    {user ? (

<div className="space-x-3 flex items-center">
      
<button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-400" onClick={logOutHandle}>
  Log Out
</button>

</div>


     
    ) :( 

      <div className="space-x-3 flex items-center">
      <Link to='/signup'>
        <button className="bg-transparent text-white border border-white py-2 px-6 rounded hover:bg-slate-200 hover:text-black">
          Sign Up
        </button>
      </Link>
  
      <Link to='/login'>
        <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-400">
          Log In
        </button>
      </Link>
    </div>

     )}
   

</div>

  )
}

export default NavBar