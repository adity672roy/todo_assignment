import TodoList from "@/components/TodoList";

const getAllTodos = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/todos', {
      cache: "no-store",
    });

    return await res.json();
  } catch (err) {
    console.log("GET_TODOS_ERROR", err);
  }
};

export default async function Home() {
  const todos = await getAllTodos();
  return <TodoList todos={todos} />;
}
