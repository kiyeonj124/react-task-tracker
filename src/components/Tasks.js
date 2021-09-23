import Task from "./Task"
const Tasks = ({tasks, onDelete, onToggle}) => {
    

    return (
        <div>
            {tasks.map((task, index)=>(
                <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle} />
                // <h3 key={task.id} >{task.text}</h3>
            ))}            
        </div>
    )
}

export default Tasks
