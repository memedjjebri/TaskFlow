import Task from "@models/tasks";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@types";

export const DELETE = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();

    // Find the task by ID and remove it
    const task = await Task.findByIdAndDelete(params.id);

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { message: "Error deleting task" },
      { status: 500 }
    );
  }
};
