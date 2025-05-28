import Img from "../assets/img.svg";

const Moodboard = () => {
  return (
    <div className="bg-[#ECF7F7] h-screen mx-[450px] mt-24 w-3/4">
      <div className="">
        <p className="text-[#5C5555] text-lg font-semibold">Moodboards</p>
        <p className="text-[#847D7F] text-sm">
          Bloomsy created this moodboards based on your dreams
        </p>
      </div>
      <div className="flex gap-5 mt-16">
        <div className="">
          <div className="flex gap-2">
            <img src={Img} alt="" />
            <img src={Img} alt="" />
          </div>
          <p className="text-md text-[#4F382C] mt-3">Start a skincare line</p>
          <button
            className="w-[120px] h-10 bg-[#FEFAF5] border border-[#E9DED4] mt-3
            text-md text-center py-2 rounded-lg"
          >
            View
          </button>
        </div>
        <div className="">
          <div className="flex gap-2">
            <img src={Img} alt="" />
            <img src={Img} alt="" />
          </div>
          <p className="text-md text-[#4F382C] mt-3">Start a skincare line</p>
          <button
            className="w-[120px] h-10 bg-[#FEFAF5] border border-[#E9DED4] mt-3
            text-md text-center py-2 rounded-lg"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moodboard;
