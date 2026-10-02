import { useState } from 'react'

const initialTask = {
  name: '',
  activityType: '',
  status: '',
  summary: '',
  description: '',
  priority: '',
  reporter: '',
  assignee: '',
  precondition: '',
  creationDate: '',
  closingDate: '',
  sprint: ''
}

const TaskForm = ({ tasks, setTasks, taskToEdit, setTaskToEdit }) => {
  const [newTask, setNewTask] = useState(taskToEdit || initialTask)

  const addTask = (event) => {
  event.preventDefault()
  // editar tarea
  if (taskToEdit) {
    setTasks(
      tasks.map(task =>
        task.id === taskToEdit.id ? {...newTask, id: taskToEdit.id} : task
      ))
    setTaskToEdit(null)
    setNewTask(initialTask)
    return
  }
  // crear nueva tarea
  const task = {
    id: tasks.length + 1,
    ...newTask
  }
  setTasks(tasks.concat(task))
  setNewTask(initialTask)
}

  const handleNewTask = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-mantle shadow-lg p-6">
      <h2 className="text-2xl font-bold text-lavander mb-2 text-center">
        {taskToEdit ?
          'Editar tarea' : 'Agregar nueva tarea'}
      </h2>
      <p className="text-sm text-lavander mb-8 text-center">
        Completa los datos para crear una nueva tarea
      </p>

      <form onSubmit={addTask} className="space-y-4 bg-mantle">
        {/* nombre del proyecto */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-lavander"
          >
            Nombre del Proyecto
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleNewTask}
            placeholder="Ej: Gestor de tareas"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />

        </div>
        {/* tipo actividad*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="activityType"
            className="text-sm font-semibold text-lavander"
          >
            Tipo de Actividad
          </label>
          <select
            id="activityType"
            name="activityType"
            value={newTask.activityType}
            onChange={handleNewTask}
            className="w-full bg-mantle px-4 py-2 outline-none text-sm text-lavander"
          >
            <option value="">Seleccionar tipo de actividad</option>
            <option value="Tarea">Tarea</option>
            <option value="Bug">Bug</option>
            <option value="Historia">Historia</option>
            <option value="Mejora">Mejora</option>
            <option value="Épica">Épica</option>
          </select>
        </div>
        {/* setado*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="status"
            className="text-sm font-semibold text-lavander"
          >
            Estado
          </label>
          <select
            id="status"
            name="status"
            value={newTask.status}
            onChange={handleNewTask}
            className="w-full bg-mantle px-4 py-2 outline-none text-sm text-lavander"
          >
            <option value="">Seleccionar estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="Completada">Completada</option>
          </select>
        </div>
        {/* rsumen */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="summary"
            className="text-sm font-semibold text-lavander"
          >
            Resumen
          </label>
          <input
            id="summary"
            type="text"
            name="summary"
            value={newTask.summary}
            onChange={handleNewTask}
            placeholder="Resumen breve de la tarea"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/*descrip*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-lavander"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={newTask.description}
            onChange={handleNewTask}
            placeholder="Describe detalladamente la tarea"
            rows="3"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface resize-none"
          />
        </div>
        {/* prioridad*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="priority"
            className="text-sm font-semibold text-lavander"
          >
            Prioridad
          </label>
          <select
            id="priority"
            name="priority"
            value={newTask.priority}
            onChange={handleNewTask}
            className="w-full bg-mantle px-4 py-2 outline-none text-sm text-lavander"
          >
            <option value="">Seleccionar prioridad</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        {/*informador*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="reporter"
            className="text-sm font-semibold text-lavander"
          >
            Informador
          </label>
          <input
            id="reporter"
            type="text"
            name="reporter"
            value={newTask.reporter}
            onChange={handleNewTask}
            placeholder="Nombre del informador"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/*asignado */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="assignee"
            className="text-sm font-semibold text-lavander"
          >
            Persona asignada
          </label>
          <input
            id="assignee"
            type="text"
            name="assignee"
            value={newTask.assignee}
            onChange={handleNewTask}
            placeholder="Nombre de la persona asignada"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/* precondicion*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="precondition"
            className="text-sm font-semibold text-lavander"
          >
            Precondición
          </label>
          <textarea
            id="precondition"
            name="precondition"
            value={newTask.precondition}
            onChange={handleNewTask}
            placeholder="Condiciones necesarias para realizar la tarea"
            rows="3"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface resize-none"
          />
        </div>
        {/* fecha creacion*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="creationDate"
            className="text-sm font-semibold text-lavander"
          >
            Fecha de Creación
          </label>
          <input
            id="creationDate"
            type="date"
            name="creationDate"
            value={newTask.creationDate}
            onChange={handleNewTask}
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/*fecha cierre*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="closingDate"
            className="text-sm font-semibold text-lavander"
          >
            Fecha de Cierre
          </label>
          <input
            id="closingDate"
            type="date"
            name="closingDate"
            value={newTask.closingDate}
            onChange={handleNewTask}
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/*sprint*/}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="sprint"
            className="text-sm font-semibold text-lavander"
          >
            Sprint
          </label>
          <input
            id="sprint"
            type="text"
            name="sprint"
            value={newTask.sprint}
            onChange={handleNewTask}
            placeholder="Ej: Sprint 1"
            className="w-full px-4 py-2 text-lavander text-sm outline-none border-b border-surface"
          />
        </div>
        {/* button */}
        <button
          type="submit"
          className="w-full bg-green px-4 py-3 font-medium text-mantle cursor-pointer"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  )
}

export default TaskForm