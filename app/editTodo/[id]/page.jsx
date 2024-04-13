import EditTodoForm from "@/components/EditTodoForm";

const getTodo = async (id) => {
  try {
    const res = await fetch(`https://todo-assignment-jade.vercel.app/api/todos/${id}`, {
      cache: "no-store",
    });
    console.log(res);
    return await res.json();
  } catch (err) {
    console.log("GET_TODO_ERROR", err);
  }
};
const EditTodo = async ({ params }) => {
  const { id } = params;
  const todo = await getTodo(id);
  console.log(todo.title)
  console.log(todo.description) 
  return <EditTodoForm id={id} t={todo.title} d={todo.description} />;
};

export default EditTodo;
