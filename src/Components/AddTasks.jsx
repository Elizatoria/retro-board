import { useState } from "react";

const AddTasks = ({tasks, setTasks}) => {

  const [task, setTask] = useState({
    name: "",
    status: "Went Well",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTasks((prev) => {
      const list = [...prev, task]
      return list;
    })
  }

  return (
  <form onSubmit={handleSubmit}>
    <textarea type="text" className="border-2 border-slate-400"
    onClick={(e) => setTask({...task, name: e.target.value})}/>
    <button>Create</button>
  </form>
  );
};

export default AddTasks;