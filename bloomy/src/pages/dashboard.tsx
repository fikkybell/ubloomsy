// import Sidebar from "../components/layouts/sidebar"
import logo from '../assets/logo.svg'
import Button from '../components/ui/button'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import 'react-circular-progressbar/dist/styles.css'
import ProgressList from '../components/ui/progress'
import CalendarView from '../components/ui/calendar'
import motivation from '../assets/unloom.png'


// import { Outlet } from 'react-router-dom';
const categoriesData = [
  { category: 'Health', progress: '-1/5', percentage: 60 },
  { category: 'Career', progress: '-5/5', percentage: 100 },
  { category: 'Education', progress: '-2/4', percentage: 50 },
]
const schedule = [
  {
    date: '28 March',
    task: 'Write Introduction',
    status: 'overdue',
    color: 'bg-[#F49974]'
  },
  {
    date: '30 March',
    task: 'Write',
    status: 'due',
    color: 'bg-[#FCF5DF]'
  },
  {
    date: '2 April',
    task: 'Play',
    status: 'upcoming',
    color: 'bg-[#DFF4F5]'
  }
]


const data = [
  { month: 'Jan', dreams: 5, goals: 3, mood: 4.5 },
  { month: 'Feb', dreams: 6, goals: 4, mood: 5.0 },
  { month: 'Mar', dreams: 7, goals: 6, mood: 6.2 },
  { month: 'Apr', dreams: 8, goals: 6, mood: 5.8 },
  { month: 'May', dreams: 6, goals: 5, mood: 6.5 },
  { month: 'Jun', dreams: 9, goals: 7, mood: 7.0 }
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
           
           <div className="mt-10 bg-white w-[58%] h-[300px] rounded-2xl shadow-sm text-sm pb-12">
               <h2 className="mb-4 text-center pt-4 text-[#757778]"> Your Glow Chart✨ </h2>
      <ResponsiveContainer width="90%" height="90%">
      <AreaChart data={data}>
      <XAxis
  dataKey="month"
  stroke="#F49974" // axis line color
  tick={{ fill: '#9F9F9F', fontSize: 12, fontFamily: 'Urbanist' }} // tick number styles
  tickLine={false}
/>
<YAxis
  stroke="#A8D9D7"
  tick={{ fill: '#9F9F9F', fontSize: 12, fontFamily: 'Urbanist' }}
  tickLine={false}
/>
    <Tooltip />
    <Legend />
    <Area
      type="monotone"
      dataKey="dreams"
      stroke="#A8D9D7"
      fill="#A8D9D7"
      strokeWidth={1}
      fillOpacity={0.3}
    />
    <Area
      type="monotone"
      dataKey="goals"
      stroke="#F49974"
      fill="#F49974"
      strokeWidth={1}
      fillOpacity={0.2}
    />
    <Area
      type="monotone"
      dataKey="mood"
      stroke="#9F9F9F"
      fill="#9F9F9F"
      strokeWidth={1}
      fillOpacity={0.1}
    />
  </AreaChart>
      </ResponsiveContainer>
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
            <div className="w-[32%] bg-white  h-[241px] rounded-2xl shadow-sm">
              <img src={motivation} alt="" className='w-full h-full rounded-2xl' />
            </div>
           </div>
          </main>
          
    </div>
    <div className=" bg-[#A8D9D7] basis-[25%]">
      <div className="flex justify-end mr-4">
      <img src ={logo} alt=""/>
      </div>
      <div className="flex flex-col items-center gap-y-10">
      <div className="w-[75%] bg-white rounded-lg shadow-sm h-[341px]">
      <div className="space-y-4 bg-white rounded-2xl p-6 shadow-md">
  <p className="text-[#767676] text-sm font-medium">Saturday, 30 Mar</p>

  {schedule.map((item) => (
    <div className={`rounded-lg px-4 py-3 text-[#8B8779] font-light ${item.color}`}>
      <p className="text-sm text-[#8B8779] font-light">{item.task}</p>
      <p className="text-xs  mt-1">Deadline</p>
      <p className="text-xs">{item.date}</p>
    </div>
  ))}
  
</div>
      </div>
     <div className="w-[75%] bg-white rounded-lg shadow-sm h-[300px]">
      <CalendarView/>
     </div>
      </div>
     
    </div>
    {/* <Outlet/> */}
  </div>
  )
}

export default Dashboard