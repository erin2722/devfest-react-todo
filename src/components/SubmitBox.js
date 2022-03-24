import { useState } from 'react';

const SubmitBox = (props) => {
    const [val, setVal] = useState("");

    const onSubmit = () => {
        setVal("");
        props.addTodo(val);
    };

    return (
        <div>
            <input type="text" value={val} onChange={e => setVal(e.target.value)}></input>
            <button onClick={() => onSubmit()}>Submit</button>
        </div>
    )
};

export default SubmitBox;