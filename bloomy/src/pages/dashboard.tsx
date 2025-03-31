// import Sidebar from "../components/layouts/sidebar"
import logo from '../assets/logo.svg'

// import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="h-full flex bg-[#ECF7F7] ">
    <div className="bg-[#ECF7F7] flex-1 justify-center items-center basis-[75%]">
       
          <main className="mx-[400px] mt-14 w-11/12">
            <p className="text-[#757778] text-lg">Fikayo🌻, What will you like to achieve?</p>
           <div className="mt-5 bg-white w-[58%] h-[200px] rounded-2xl shadow-sm">
              
           </div>
           <div className="mt-10 bg-white w-[58%] h-[200px] rounded-2xl shadow-sm">
              <p className="text-3xl text-center"></p>
           </div>
           <div className="flex gap-4 mt-10 mb-20">
            <div className="w-3/12 bg-white rounded-2xl shadow-sm h-[241px]"></div>
            <div className="w-[32%] bg-white  h-[241px] rounded-2xl shadow-sm"></div>
           </div>
          </main>
          
    </div>
    <div className=" bg-[#A8D9D7] basis-[25%]">
      <div className="flex justify-end mr-4">
      <img src ={logo} alt=""/>
      </div>
      <div className="flex flex-col items-center gap-y-10">
      <div className="w-[75%] bg-white rounded-lg shadow-sm h-[341px]"></div>
     <div className="w-[75%] bg-white rounded-lg shadow-sm h-[300px]"></div>
      </div>
     
    </div>
    {/* <Outlet/> */}
  </div>
  )
}

export default Dashboard