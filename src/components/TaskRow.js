const TaskRow = (props) => {
    return (
        <div>
            {props.name}
            <button onClick={() => props.deleteTodo(props.name)}>X</button>
        </div>
    )
};

export default TaskRow;