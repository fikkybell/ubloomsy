
interface listProps {
    name: string;
    status: string;
  }
  const statusStyles: { [key: string]: string } = {
    pending: 'bg-[#FCF5DF]',
    completed: 'bg-[#ECF7F7]',
    ongoing: 'bg-[#F49974]',
  }
  const TodoList = ({ name, status}: listProps)=> {
    return (
        <div className="flex justify-between border border-[#E9DED4] rounded-lg h-auto p-3 mb-5">
        <input type="checkbox" />
        <p className="text-sm text-[#9F9F9F]">{name}</p>
        <div className={`w-[84px] font-light h-5 text-xs text-center py-0.5 rounded-lg ${statusStyles[status]}`}>
        {status}
      </div>
      </div>
    );
  };
  
  export default TodoList