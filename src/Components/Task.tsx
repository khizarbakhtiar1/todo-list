"use client";
import { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState<
    { task: string; description: string }[]
  >([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, description }]);

    setTask("");
    setDescription("");
  };

  let renderTask: JSX.Element | null = null; // Initialize as null

  const deleteHandler = (i: number) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  if (mainTask.length > 0) {
    renderTask = (
      <ul>
        {mainTask.map((t, i) => (
          <li key={i} className="flex justify-between mb-6">
            <div className="w-2/3">
              <h5 className="text-3xl font-bold">{t.task}</h5>
              <p className="text-md font-medium">{t.description}</p>
            </div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="px-4 bg-red-500 text-white font-bold rounded h-10"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    renderTask = (
      <h2 className="text-center font-semibold">No Task Available</h2>
    );
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter New Task"
          className="px-2 py-2 m-3 border-zinc-800 border-4 text-xl rounded-lg"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          className="px-2 py-2 m-3 border-zinc-800 border-4 text-xl rounded-lg"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="rounded py-2 px-4 m-5 font-bold bg-slate-600 text-white">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">{renderTask}</div>
    </>
  );
};

export default Task;
