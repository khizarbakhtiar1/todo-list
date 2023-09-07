import Task from "@/Components/Task";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-sans font-semibold p-5 text-center bg-slate-600 text-white">
        TODO LIST
      </h1>
      <Task />
    </>
  );
}
