"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTodoForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description required");
      return;
    }
    try {
      const res = await fetch("https://todo-assignment-jade.vercel.app/api/todos", {
        method: "POST",
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title"
        className="border border-black py-3 px-5 text-xl outline-none"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter the description"
        className="border border-black py-3 px-5 text-xl outline-none"
      />
      <button type="submit" className="w-fit bg-black text-white py-2 px-3">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
