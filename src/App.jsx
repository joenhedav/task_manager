import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { IoIosAddCircleOutline, IoIosCloseCircleOutline} from "react-icons/io"

const App = () => {
  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)

  /* borrar una tarea */
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)
    )
  }

  return (
    <div className="min-h-screen w-full bg-base text-lavander p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Gestor de tareas
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? (
            <IoIosCloseCircleOutline
              className="text-4xl cursor-pointer text-red"
            />
          ) : (
            <IoIosAddCircleOutline
              className="text-4xl cursor-pointer text-green"
            />
          )}
        </button>
      </div>
      {/*mostrar formulario o tasks */}
      <div
        className={ showForm ? "grid grid-cols-1 lg:grid-cols-3 gap-8" : "w-full"}
      >
        {/* taskForm*/}
        {showForm && (
          <div className="lg:col-span-1">
            <TaskForm
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        )}
        {/* taskList */}
        <div
          className={showForm ? "lg:col-span-2" : "w-full"}
        >
          <h2 className="text-2xl font-bold mb-4">
            Mis tareas
          </h2>
          <TaskList
            tasks={tasks} 
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  )
}

export default App