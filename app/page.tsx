"use client";
import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Alert,
  AlertIcon,
  Heading,
  Text,
  Card,
  Spinner,
} from "@chakra-ui/react";

import { ITask } from "@types";

import Task from "@components/Task";
import NoTask from "@components/NoTask";
import Loading from "@components/Loading";
import Header from "@components/Header";
import AddTask from "@components/AddTask";

export default function Home() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setAllTasks(data);
    } catch (error) {
      console.log("Error fetching tasks:", error);
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

  // Fetch all the tasks when the component is loaded
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Flex direction="column" p="2rem">
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
        </Flex>
      )}
    </>
  );
}
