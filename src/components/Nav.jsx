import { AiOutlineUserAdd } from "react-icons/ai"; 
import { FaSchool } from "react-icons/fa"; 
import {Link} from 'react-router'

const Nav = () => {
  return (
    <nav className="py-2 px-8 flex min-w-full h-24 justify-between items-center bg-amber-950 text-white">
        <div className='bg-gray-300 rounded-2xl space-x-4 p-3 flex items-center justify-center'>
            <FaSchool  className="text-blue-500 text-3xl"/>
            <span className="text-black text-2xl font-bold">Honeyland School</span>
        </div>
        <div className="font-semibold text-2xl">HardCode University</div>
        <div>
            <Link to='/create-student'>
              <button className="flex cursor-pointer justify-center items-center space-x-2 bg-blue-500 p-3 rounded-2xl">
              <AiOutlineUserAdd /> <span>Add Student</span>
              </button>
            </Link>
        </div>

    </nav>
  )
}

export default Nav