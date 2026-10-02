import TaskCard from "./TaskCard"

const TaskList = ({tasks, deleteTask}) => {
    return (
        <>
          {tasks.length === 0 ?
            <p className="text-surface">
              No se agregaron nuevas tareas
            </p>
            : 
            <div className="grid grid-cols-3 gap-4">
              {tasks.map(task => 
                <TaskCard 
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  activityType={task.activityType}
                  status={task.status}
                  summary={task.summary}
                  priority={task.priority}
                  reporter={task.reporter}
                  assignee={task.assignee}
                  creationDate={task.creationDate}
                  closingDate={task.closingDate}
                  sprint={task.sprint}
                  deleteTask={deleteTask}
                />
              )}
            </div>
          }
        </>
    )
}

export default TaskList