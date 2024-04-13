"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTodoForm = ({ id, t, d }) => {
  const [title, setTitle] = useState(t);
  const [description, setDescription] = useState(d);
  const router = useRouter();

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description required");
      return;
    }
    try {
      const res = await fetch(`https://todo-assignment-jade.vercel.app/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        console.log("POST_ERROR");
      }
    } catch (err) {
      console.log("POST_TODOS", err);
    }
  };
  return (
    <form onSubmit={handleEdit} className="flex flex-col gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter the topic"
        className="border border-black py-3 px-5 text-xl outline-none"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the description"
        className="border border-black py-3 px-5 text-xl outline-none"
      />
      <button type="submit" className="w-fit bg-green-600 text-white py-2 px-3">
        Update Todo
      </button>
    </form>
  );
};

export default EditTodoForm;
