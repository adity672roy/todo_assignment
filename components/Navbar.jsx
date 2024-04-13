import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center bg-black px-8 py-4">
      <Link href={"/"} className="text-white font-bold">TODO</Link>
      <Link href={"/addTodo"} className="bg-white p-2">Add Todo</Link>
    </nav>
  );
};

export default Navbar;
