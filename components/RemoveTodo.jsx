"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveTodo = ({ id }) => {
  const router = useRouter();
  const deleteTodo = async () => {
    try {
      const res = await fetch(`https://todo-assignment-jade.vercel.app/api/todos/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (err) {
      console.log("DELETE_ERROR", err);
    }
  };

  return (
    <button className="text-red-400" onClick={deleteTodo}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveTodo;
