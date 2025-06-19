import React, { useState, useRef } from "react";
import arrow from "../assets/arrow.svg";
import star from "../assets/star.svg";
import Button from "../components/ui/button";
import checkmark from "../assets/checkmark.svg";
import Todo from "../components/ui/todo";
import EditModal from "../components/ui/editmodal";
import { v4 as uuidv4 } from "uuid";
import { generateStepsAndMood } from "../utils/openAI";
import { fetchMoodboardImages } from "../utils/imageGenerator";

// const items = [
//   "Research market and competitors",
//   "Develop product formulations",
//   "Design packaging and branding",
//   "Launch online store",
// ];

interface TodoItem {
  id: string;
  task: string;
  status: "new" | "pending" | "completed" | "ongoing";
}

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");
  const [steps, setSteps] = useState<string[]>([]);
  const [moodboard, setMoodboard] = useState<string[]>([]);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingTodos, setEditingTodos] = useState<TodoItem[] | null>(null);



  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageToReplace = useRef<number | null>(null);
  const handleReplaceClick = (index: number) => {
    imageToReplace.current = index;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = reader.result as string;
      if (imageToReplace.current !== null) {
        const updated = [...moodboard];
        updated[imageToReplace.current] = newImage;
        setMoodboard(updated);
        imageToReplace.current = null;
      }
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async () => {
    if (!goal || !category) return;

    setLoading(true);
    const { stepList, keywords } = await generateStepsAndMood(goal, category);
    const images = await fetchMoodboardImages(keywords);

    const todos: any = stepList.map((step) => ({
      id: uuidv4(),
      task: step,
      status: "new",
    }));
    console.log(stepList, todos);
    console.log(moodboard);
    setSteps(stepList);
    setMoodboard(images);
    setTodoList(todos);
    setLoading(false);
  };

  const updateStatus = (id: string, status: TodoItem["status"]) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  return (
    <div className="bg-[#ECF7F7] h-screen mx-[450px] mt-24 w-3/4">
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
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" 
      px-10 py-2 pr-10 text-[#444244] text-left w-[40%]
      border-4 border-[#FEF7F2] rounded-3xl h-20 
      appearance-none focus:outline-none focus:ring-2 focus:ring-[#6DB3B0]
      transition-all duration-200
      hover:border-[#6DB3B0]
    "
          >
            <option value="">Select Category</option>
            <option value="Health">Health</option>
            <option value="Career">Career</option>
            <option value="Finance">Finance</option>
          </select>
          <img
            src={arrow}
            alt="dropdown arrow"
            className="absolute top-8 left-48 h-4 w-4"
          />
        </div>
      </div>

      <Button
        className="mt-8"
        name={loading ? "Generating..." : "Bloom"}
        action={handleSubmit}
        disabled={loading}
      />

      <div className="flex mt-32 gap-1 w-[78%]">
        {steps.length > 0 && (
          <div className="">
            <p className="text-[#4D494B] text-[20px] font-semibold">
              Steps to achieve it
            </p>
            <ul className="pl-0">
              {steps.map((item, index) => (
                <li key={index} className="flex items-start gap-3 mt-4 w-4/5">
                  <div className="flex-shrink-0 mt-[10px]">
                    <img src={checkmark} alt="checkmark" className="h-5 w-5" />
                  </div>
                  <p className=" text-[#4D494B] leading-10 font-light">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            {/* <Button name="Approve Bloom"/> */}
          </div>
        )}
        {moodboard.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
              {moodboard.map((url, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={url}
                    alt={`Image ${index}`}
                    className="w-60 block h-60 object-cover"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleReplaceClick(index)}
                      className="text-white text-2xl  p-2 hover:text-black transition"
                    >
                      🔁
                    </button>
                  </div>
                </div>
              ))}
              {/* hidden file input */}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <p className="text-[#AFA6A8] mt-3 text-lg">Moodboard</p>
          </div>
        )}
      </div>
      {todoList.length > 0 && (
  <div className="flex gap-8">
    <Todo 
  name={goal} 
  categories={category} 
  todos={todoList} 
  onEdit={(todos) => setEditingTodos(todos)} 
/>
{editingTodos && (
  <EditModal
    todos={editingTodos}
    onClose={() => setEditingTodos(null)}
    onSave={(updatedTodos) => {
      setTodoList(updatedTodos);
      setEditingTodos(null);
    }}
  />
)}
  </div>

)}
    </div>
  );
};

export default Goals;
