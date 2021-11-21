import { FaTimes } from 'react-icons/fa'

const TaskItem = ({ taskItem, onDelete, setReminder }) => {
    return (
        <div className={`task ${taskItem.reminder ? 
            'reminder' : ''}`} 
            onClick={() => setReminder(taskItem.id)}
            title={`Click to ${taskItem.reminder ? 'remove' : 'add'} reminder for this task`}
            >
            <h3>{ taskItem.text } 
            <FaTimes
                style={{ color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(taskItem.id)}
             /> </h3>
            <p>{ taskItem.day }</p>
        </div>
    )
}

export default TaskItem
