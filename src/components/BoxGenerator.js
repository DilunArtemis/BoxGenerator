import React, { useState } from "react";


const BoxGenerator = props => {


    const [state, setState] = useState({
    boxes: [],
    color: "",
    width: "",
    height: "",
    });

    const onChangeHandler = e => {
    setState({
        ...state, [e.target.name]: e.target.value
    });
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        state.boxes.push(state);
        setState({...state});
        setState({
            boxes: state ["boxes"],
            color: "",
            width: "",
            height: "",
        });
    };
    

    return (
    <div>
        <h1>Add a new box!</h1>
        <form onSubmit = {onSubmitHandler}>
            <label htmlFor="color">Color: </label>
            <input type="text" name = "color" value = {state.color} onChange = {onChangeHandler}/>
            <br/>

            <label htmlFor="height">Height: </label>
            <input type="text" name = "height" value = {state.height} onChange = {onChangeHandler}/>
            <br/>

            <label htmlFor="width">Width: </label>
            <input type="text" name = "width" value = {state.width} onChange = {onChangeHandler}/>
            <br/>

            <input type="Submit" value = "Make a box!"/>

        </form>

        {
            state.boxes.map(
                (boxes, i) =>
                <div key = {i} style={{background: boxes.color, height: boxes.height+"px", width:boxes.width+"px", display:"inline-block"}}>{boxes.color}</div>
            )}
    </div>
    )
}


export default BoxGenerator;