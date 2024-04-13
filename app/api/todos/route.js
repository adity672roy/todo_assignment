import { connectToDB } from "@/lib/mongoDB";
import Todo from "@/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, description } = await req.json();
    await connectToDB();
    const todo = await Todo.create({ title, description });
    await todo.save();
    return NextResponse.json(todo, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const todos = await Todo.find();
    return NextResponse.json(todos, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};


