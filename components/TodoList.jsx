import RemoveTodo from "./RemoveTodo";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex items-start gap-4 justify-between border border-black p-3 my-3"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
            <div className="flex gap-2">
              <RemoveTodo id={todo._id}/>
              <Link href={`/editTodo/${todo._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoList;
