import { IoTrashOutline } from "react-icons/io5";
import { TfiPencil } from "react-icons/tfi";
import { MdDone } from "react-icons/md";

const priorityStyles = {
  Baja: {
    border: 'border-green',
    text: 'text-green'
  },
  Media: {
    border: 'border-yellow',
    text: 'text-yellow'
  },
  Alta: {
    border: 'border-red',
    text: 'text-red'
  }
}

const statusStyles = {
  Pendiente: 'bg-base text-yellow',
  'En progreso': 'bg-base text-blue',
  Completada: 'bg-base text-green'
}

const TaskCard = ({
id,
name,
activityType,
status,
summary,
priority,
reporter,
assignee,
creationDate,
closingDate,
sprint,
deleteTask
}) => {

  const priorityStyle =
    priorityStyles[priority] || {
      border: 'border-subtext',
      text: 'text-subtext'
    }

  const statusStyle =
    statusStyles[status] || 'bg-base text-subtext'

  return (
    <div
      className={`bg-mantle w-full p-4 border-l-4 ${priorityStyle.border} min-w-0`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3
          className="text-sm font-bold text-lavander line-clamp-1 min-w-0"
          title={name}
        >
          {name}
        </h3>
        <span
          className={`shrink-0 text-xs font-semibold px-2 py-1 ${statusStyle}`}
        >
          {status || 'Estado'}
        </span>
      </div>
      <div className="flex flex-wrap gap-1 mb-2">
        <span className="bg-base text-subtext font-semibold text-xs px-2 py-1">
          {activityType || 'Tipo'}
        </span>
        <span className="bg-base text-subtext font-semibold text-xs px-2 py-1">
          {sprint || 'Sprint'}
        </span>
        <span
          className={`bg-base text-xs px-2 py-1 font-semibold ${priorityStyle.text}`}
        >
          {priority || 'Prioridad'}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-xs text-lavander font-semibold mb-1">
          Resumen
        </p>

        <p
          className="text-xs text-lavander line-clamp-3"
          title={summary}
        >
          {summary || '-'}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="min-w-0">
          <p className="text-xs text-lavander font-semibold">
            Informador
          </p>

          <p
            className="text-xs text-lavander truncate"
            title={reporter}
          >
            {reporter || '-'}
          </p>
        </div>
        <div className="min-w-0">
          <p className="text-xs text-lavander font-semibold">
            Asignado
          </p>
          <p
            className="text-xs text-lavander truncate"
            title={assignee}
          >
            {assignee || '-'}
          </p>
        </div>
      </div>
      <div className="border-t border-base p-2 flex justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs text-lavander font-semibold">
            Fecha de creación
          </p>

          <p className="text-xs text-lavander truncate">
            {creationDate || '-'}
          </p>
        </div>
        <div className="min-w-0 text-right">
          <p className="text-xs text-lavander font-semibold">
            Fecha de cierre
          </p>
          <p className="text-xs text-lavander truncate">
            {closingDate || '-'}
          </p>
        </div>
      </div>
      {/*eliminar editar finalizar */}
      <div className="border-t border-base pt-2 flex w-full justify-end gap-2">
        <button 
          onClick={() => deleteTask(id)}
          className="cursor-pointer"
        >
          <IoTrashOutline />
        </button>
        <button 
          onClick={() => deleteTask(id)}
          className="cursor-pointer"
        >
          <TfiPencil />
        </button>
        <button 
          onClick={() => deleteTask(id)}
          className="cursor-pointer"
        >
          <MdDone />
        </button>
      </div>
    </div>
  )
}

export default TaskCard