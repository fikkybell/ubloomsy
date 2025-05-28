import dashIcon from '../../assets/moodboard.svg'
import safeIcon from '../../assets/safe.svg'
import goalIcon from '../../assets/goal.svg'
import logout from '../../assets/logout.svg'
import { NavLink } from 'react-router-dom';

const menu = [
    {images : dashIcon,
     text : "DASHBOARD",
     path : '/'
    },
    {images : goalIcon,
     text : "SET GOAL",
     path : '/goal'
    },
    {images : dashIcon,
        text : "MOODBOARD",
        path : '/moodboard'
       },
    {images : safeIcon,
     text : "SAFE SPACE",
     path : '/safe'
    }
]
const sidebar = ():any => {
  return (
    <div className="fixed bg-white w-[300px] rounded-lg h-[700px] top-16 left-12 text-[#9F9F9F] shadow-sm mb-10">
        <div className="flex flex-col justify-center items-center mt-20">
            <div className=" h-16 w-16 rounded-full bg-[#A8D9D7]"></div>
            <p className="mt-1 text-sm text-[#9F9F9F]">Fikayo</p>
            <p className="mt-1 text-sm font-semibold text-[#9F9F9F]">Jesufikayo28@gmail.com</p>
        </div>
        <div>
        <div className="flex flex-col justify-center h-full mt-12">
  <ul className="w-full space-y-2">
    {menu.map((img, index) => (
      
         <NavLink 
              to= {img.path}
              end
              className={({ isActive }) => 
                `block rounded ${isActive ? 'bg-[#E7F5F5] text-[#6DB3B0] transition-all w-full' : 'hover:bg-white'}`
              }
            >
              <li
        key={index}
        className="py-4 px-14 "
      >
              <div className="flex items-center gap-7 text-sm px-4 ">
              <img className="h-5 w-5 object-contain" src={img.images} alt={img.text} />
              <span className="whitespace-nowrap">{img.text}</span>
              </div>
              </li>
            </NavLink>
       
     
    ))}
    <li className='flex items-center text-[14px] gap-7 px-16 py-24 cursor-pointer'>
        <img src={logout} alt="" className='h-6 w-6 object-contain' />
    <span className="whitespace-nowrap">LOGOUT</span>
    </li>
  </ul>
</div>
        </div>
    </div>
  )
}

export default sidebar
