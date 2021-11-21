import TaskItem from "./TaskItem"

const Task = ({ tasks, onDelete, setReminder }) => {

    return (
        <div>
            {tasks.map((taskItem) => (
                <TaskItem key={taskItem.id} 
                taskItem={taskItem} 
                onDelete={onDelete} 
                setReminder={setReminder} />
            ))}
        </div>
    )
}

export default Task
