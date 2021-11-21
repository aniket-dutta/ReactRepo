import Header from "./components/Header";
import Task from "./components/Task";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const server = "http://localhost:5000/tasks"
  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTask();
  }, []);

  //Fetch Task
  const fetchTasks = async () => {
    const res = await fetch(server);
    const data = await res.json();

    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`${server}/${id}`);
    const data = await res.json();

    return data;
  };

  //Add Task
  const addTask = async (task) => {
    // console.log(task)
    // const id = Math.floor(Math.random() * 1000 ) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    const res = await fetch(server, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json(); // post return the new data which was added
    setTasks([...tasks, data]);
  };

  // Delete TaskItem
  const deleteTask = async (id) => {
    // console.log(id)
    await fetch(`${server}/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // set reminder
  const setReminder = async (id) => {
    // console.log(id);

    const taskToSet = await fetchTask(id);
    const updateTask = { ...taskToSet, reminder: !taskToSet.reminder };

    const res = await fetch(`${server}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };

  const onAdd = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={onAdd} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Task tasks={tasks} onDelete={deleteTask} setReminder={setReminder} />
                ) : (
                  "No Rows to show"
              )}
        <Footer />
        <Routes>
          {/* <Route 
          path="/" 
          exact 
          render={(props) => 
            {
              <>
              
              </>
            }
            
          } 
          /> */}
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
