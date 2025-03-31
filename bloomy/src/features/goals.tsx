import arrow from "../assets/arrow.svg";
import star from "../assets/star.svg";
import Button from "../components/ui/button";
const Goals = () => {
  return (
    <div className="bg-[#ECF7F7] h-screen mx-[400px] mt-14 w-auto">
      <div>
        <p className="text-[#5C5555] text-lg font-semibold">
          Tell us your dream for the Month
        </p>
        <p className="text-[#847D7F] text-sm">
          Bloomsy suggests steps to achieve it...
        </p>
      </div>
      <div className="flex gap-2 mt-10 w-full">
        <div className="relative w-full">
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
          <div className="absolute inset-y-7 right-6">
          <img src={star} alt="" />
          </div>
          
        </div>

        <div className="relative">
          <select
            className="
      w-auto px-10 py-2 pr-10 text-[#444244] text-left
      border-4 border-[#FEF7F2] rounded-3xl h-20 
      appearance-none focus:outline-none focus:ring-2 focus:ring-[#6DB3B0]
      transition-all duration-200
      hover:border-[#6DB3B0]
    "
          >
            <option>Career</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <img src={arrow} alt="dropdown arrow" className="h-4 w-4" />
          </div>
        </div>
      </div>

      <Button className="mt-8" name="Bloom" />
      <div>

      </div>
    </div>
  );
};

export default Goals;
