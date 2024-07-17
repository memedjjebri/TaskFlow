"use client";
import { useState, useEffect } from "react";
import { ITask } from "@types";
import Task from "@components/Task";
import NoTask from "@components/NoTask";
import Loading from "@components/Loading";
import Header from "@components/Header";
import AddTask from "@components/AddTask";
import Signup from "@components/Signup";
import Login from "@components/Login";

export default function Home() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // Create a new Task
  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (response.ok) {
        setTask("");
        await fetchTasks();
      } else {
        console.log("Error creating task");
      }
    } catch (error) {
      console.log("Error creating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch all the tasks
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      if (Array.isArray(data)) {
        setAllTasks(data);
      } else {
        console.error("Data fetched is not an array", data);
        setAllTasks([]);
      }
    } catch (error) {
      console.log("Error fetching tasks:", error);
      setAllTasks([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a task
  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAllTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      } else {
        console.log("Error deleting task");
      }
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  // Complete a task
  const handleCompleteTask = async (id: string) => {
    try {
      const response = await fetch(`/api/task/complete/${id}`, {
        method: "PATCH",
      });

      if (response.ok) {
        await fetchTasks();
      } else {
        console.log("Error completing task");
      }
    } catch (error) {
      console.log("Error completing task:", error);
    }
  };

  const handleSignup = async (userData) => {
    // Implement signup logic here...
    setIsLoggedIn(true);
  };

  const handleLogin = async (userData) => {
    // Implement login logic here...
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAllTasks([]); // Clear tasks on logout
  };

  // Fetch all the tasks when the component is loaded
  useEffect(() => {
    if (isLoggedIn) {
      fetchTasks();
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-col">
      <Header />
      {isLoggedIn ? (
        <>
          <AddTask
            task={task}
            setTask={setTask}
            handleCreateTask={handleCreateTask}
          />
          {isLoading ? (
            <Loading />
          ) : (
            <div className="flex flex-col p-8">
              {allTasks.length > 0 ? (
                allTasks.map((individualTask: ITask) => (
                  <Task
                    key={individualTask._id}
                    individualTask={individualTask}
                    handleCompleteTask={handleCompleteTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                ))
              ) : (
                <NoTask />
              )}
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="mb-4 bg-red-500 text-white rounded-md px-8 py-1 text-sm transition duration-200 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </>
      ) : isSignup ? (
        <Signup handleSignup={handleSignup} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
      <button
        onClick={() => setIsSignup(!isSignup)}
        className="mb-4 text-teal-500"
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}
