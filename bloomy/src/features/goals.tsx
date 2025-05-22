import arrow from "../assets/arrow.svg";
import star from "../assets/star.svg";
import Button from "../components/ui/button";
import checkmark from '../assets/checkmark.svg'
import img1 from '../assets/image1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'
import Todo from "../components/ui/todo";

const items = [
  'Research market and competitors', 'Develop product formulations', 'Design packaging and branding', 'Launch online store'
]
const img = [
  img1,img2, img3, img4
]
const Goals = () => {
  return (
    <div className="bg-[#ECF7F7] h-full mx-[450px] mt-24 w-3/4">
      <div>
        <p className="text-[#5C5555] text-lg font-semibold">
          Tell us your dream for the Month
        </p>
        <p className="text-[#847D7F] text-sm">
          Bloomsy suggests steps to achieve it...
        </p>
      </div>
      <div className="flex mt-10 w-full gap-4">
        <div className="relative w-[70%]">
          <input
            type="text"
            placeholder="Fikayo, what do you dream about"
            className=" 
                w-full min-w-[320px] px-4 py-2  text-[#444244] placeholder:text-[#444244]
                border-4 border-[#FEF7F2] rounded-t-3xl rounded-b-lg h-20 
                focus:outline-none focus:ring-2 focus:ring-[#6DB3B0]
                transition-all duration-200
                hover:border-[#6DB3B0]"
          />
          <div className="absolute top-6 right-6">
          <img src={star} alt="" />
          </div>
          
        </div>

        <div className="w-full relative">
          <select
            className=" 
       px-10 py-2 pr-10 text-[#444244] text-left w-[40%]
      border-4 border-[#FEF7F2] rounded-3xl h-20 
      appearance-none focus:outline-none focus:ring-2 focus:ring-[#6DB3B0]
      transition-all duration-200
      hover:border-[#6DB3B0]
    " >
            <option>Career</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select> 
            <img src={arrow} alt="dropdown arrow" className="absolute top-8 left-48 h-4 w-4" />
          
        </div>
      </div>

      <Button className="mt-8" name="Bloom" />
      <div className="flex mt-32 gap-10 w-[78%]">
      <div className="">
        <p className="text-[#4D494B] text-[20px] font-semibold">Steps to achieve it</p>
        <ul className="pl-0">
  {items.map((item, index) => (
    <li key={index} className="flex items-start gap-3 mt-4 w-4/5">
      <div className="flex-shrink-0 mt-[10px]"> 
        <img 
          src={checkmark} 
          alt="checkmark" 
          className="h-5 w-5" 
        />
      </div>
      <p className="text-[18px] text-[#4D494B] leading-10 font-light">
        {item}
      </p>
    </li>
  ))}
</ul>
      </div>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
  {img.map((src, index) => (
    <img 
      key={index} 
      src={src} 
      alt={`Image ${index}`} 
      className="w-full"
    />
  ))}
</div>

        <p className="text-[#AFA6A8] mt-3 text-lg">Moodboard</p>
      </div>
      </div>
      <div className="flex gap-8">
      <Todo 
      name="START WELLNESS BLOG 🌼"
      categories="Career"
      />
      <Todo 
      name="START EATING FRUITS 🌼"
      categories="Health"
      />
      </div>
      
    </div>
  );
};

export default Goals;
