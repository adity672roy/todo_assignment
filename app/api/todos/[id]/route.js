import { connectToDB } from "@/lib/mongoDB";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    const { id } = params;
    await connectToDB();
    const { title, description } = await req.json();
    const todo = await Todo.findByIdAndUpdate(id, { title, description });
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    const { id } = params;
    await connectToDB();
    const todo = await Todo.findById({ _id: id });
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await connectToDB();
    const todos = await Todo.findOneAndDelete({ _id: id });
    return NextResponse.json(todos, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};
