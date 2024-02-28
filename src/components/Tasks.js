import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    //context api or redux to use tasks globally for multiple components

    return (
        <>
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks