import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const AddTask = ({ task, setTask, handleCreateTask }) => {
  return (
    <div className="flex pt-8 px-8 pb-4 justify-between items-center">
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        className="border border-teal-300 bg-white placeholder-gray-500 rounded-md shadow-md transition duration-200 focus:border-teal-500 focus:ring-teal-500 h-12 w-full max-w-2xl px-6"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button
        className="ml-4 bg-teal-500 text-white rounded-md shadow-lg transition duration-200 hover:bg-teal-600 transform hover:scale-105 h-12 w-12 flex items-center justify-center"
        onClick={handleCreateTask}
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default AddTask;
