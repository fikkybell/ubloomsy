import TodoList from "./todolist";
import edit from "../../assets/edit.svg";

interface TodoProps {
  name: string;
  categories: string;
  todos: {
    name: string;
    status: "new" | "pending" | "completed" | "ongoing";
    task: any
  }[];
}

const Todo = ({ name, categories, todos }: TodoProps) => {
  return (
    <div className="mt-16 mb-20 relative">
      <div className="bg-white w-[367px] h-auto pb-20 rounded-2xl mb-10 pt-12 px-7">
        <div className="absolute top-6 right-6 z-50">
          <img src={edit} alt="edit icon" className="h-6 w-6 cursor-pointer" />
        </div>
        <div>
          <p className="">{name}</p>
          <p
            className="mt-2 px-4 w-[85px] h-7 bg-[#F49974] text-[#FDEEE8] 
          text-xs text-center py-1.5 rounded-md"
          >
            {categories}
          </p>
          <p className="mt-2 text-sm">TODO LIST</p>
        </div>
        <div className="mt-8">
          {todos.map((item) => (
            <TodoList key={item.name} name={item.task} status={item.status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
