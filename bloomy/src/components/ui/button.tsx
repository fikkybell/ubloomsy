
interface ButtonProps {
  name: string;
  className?: string;
}

const Button = ({ name, className = '' }: ButtonProps)=> {
  return (
    <button className={`px-4 w-[120px] h-10 bg-[#F49974] text-[#FDEEE8] text-sm text-center py-2 rounded-md ${className}`}>
      {name}
    </button>
  );
};

export default Button