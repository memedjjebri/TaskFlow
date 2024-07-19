import React from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/outline";
import { TaskProps } from "@types";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <div
      className={`p-6 m-6 border ${
        individualTask.completed ? "border-blue-300" : "border-gray-300"
      } bg-${
        individualTask.completed ? "blue-50" : "white"
      } rounded-lg shadow-md transition-transform duration-200 hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="flex items-center">
        <span
          className={`flex-grow ${
            individualTask.completed
              ? "line-through text-blue-600"
              : "text-gray-800"
          } font-semibold text-lg`}
        >
          {individualTask.task}
        </span>
        <div className="flex space-x-4">
          <button
            className={`p-2 rounded-full transition duration-200 shadow-md flex items-center justify-center ${
              individualTask.completed
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-teal-600 text-white"
            }`}
            onClick={() => handleCompleteTask(individualTask._id)}
            disabled={individualTask.completed}
          >
            <CheckIcon className="h-5 w-5" />
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded-full shadow-md transition duration-200 hover:bg-red-600"
            onClick={() => handleDeleteTask(individualTask._id)}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
