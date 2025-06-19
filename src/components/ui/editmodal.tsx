import React, { useState } from "react";

interface TodoItem {
    id: string;
    task: string;
    status: "new" | "pending" | "completed" | "ongoing";
}

interface EditModalProps {
  todos: TodoItem[]; // 🔄 Change from single todo to list
    onClose: () => void;
    onSave: (updatedTodos: TodoItem[]) => void;
}

const EditModal = ({ todos, onClose, onSave }: EditModalProps) => {
    const [editedTodos, setEditedTodos] = useState<TodoItem[]>([...todos]);

    const handleTaskChange = (id: string, newTask: string) => {
    setEditedTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
    };

    const handleStatusChange = (id: string, newStatus: TodoItem["status"]) => {
    setEditedTodos((prev) =>
        prev.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
        )
    );
    };

    const handleSave = () => {
    onSave(editedTodos);
    };

    return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center overflow-y-auto">
        <div className="bg-white p-6 rounded-xl w-[600px] shadow-lg max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Edit Todos</h2>

        {editedTodos.map((todo) => (
            <div
            key={todo.id}
            className="border p-4 rounded-lg mb-4 bg-[#F9F9F9]"
            >
            <label className="block text-sm mb-1 text-gray-600">
                Task Name
            </label>
            <input
                type="text"
                value={todo.task}
                onChange={(e) => handleTaskChange(todo.id, e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring"
            />

            <label className="block text-sm mb-1 text-gray-600">Status</label>
            <select
                value={todo.status}
                onChange={(e) =>
                handleStatusChange(
                    todo.id,
                    e.target.value as TodoItem["status"]
                )
                }
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
            >
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
            </select>
            </div>
        ))}

        <div className="flex justify-end gap-3">
            <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-200 rounded-lg"
            >
            Cancel
            </button>
            <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-[#F49974] text-white rounded-lg"
            >
            Save All
            </button>
        </div>
        </div>
    </div>
    );
};

export default EditModal;
