// import Sidebar from "../components/layouts/sidebar"
import logo from '../assets/logo.svg'
import Button from '../components/ui/button'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ProgressList from '../components/ui/progress'

// import { Outlet } from 'react-router-dom';
const categoriesData = [
  { category: 'Health', progress: '-1/5', percentage: 60 },
  { category: 'Career', progress: '-5/5', percentage: 100 },
  { category: 'Education', progress: '-2/4', percentage: 50 },
]


const Dashboard = () => {
  return (
    <div className="h-full flex bg-[#ECF7F7] ">
    <div className="bg-[#ECF7F7] flex-1 justify-center items-center basis-[75%]">
       
          <main className="mx-[400px] mt-14 w-11/12">
            <p className="text-[#757778] text-lg">Fikayo🌻, What will you like to achieve?</p>

           <div className="mt-5 bg-white w-[58%] h-[260px] rounded-2xl shadow-sm px-10 pt-10">
              <p className='text-[#9F9F9F]'>How are you feeling today?</p>
              <p className='text-4xl mt-2'>😊 😁 😭 😩 🥲 </p>
               <div>
               <input type="text" 
               className='mt-4 w-full border border-[#EAEAEA] h-12 placeholder:text-sm px-4 rounded-md'
              placeholder='What is on your mind today?'
              />
               </div>
             <Button name='Bloom Mood' className='mt-5'/>
           </div>
           
           <div className="mt-10 bg-white w-[58%] h-[200px] rounded-2xl shadow-sm">
              <p className="text-3xl text-center"></p>
              <div></div>
           </div>
           <div className="flex gap-4 mt-10 mb-20">
            <div className="w-3/12  h-[241px]">
            <p className='text-[#7B7E7F] text-sm'>Your Progress</p>
            <div>
            {categoriesData.map((item, index) => (
            <ProgressList
            key={index}
            categories={item.category}
            progress={item.progress}
            percentage={item.percentage}
            classname={index % 2 === 0 ? 'bg-[#A8D9D7]' : 'bg-white'}
            />
            ))}
            </div>
</div>
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