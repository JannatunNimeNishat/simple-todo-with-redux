import { useDispatch } from "react-redux";
import { addTodo, clearCompleted, completeAll } from "../Redux/todo/actions";
import { useState } from "react";


const Header = () => {

    const [todoInput, setTodoInput] = useState();

    const dispatch = useDispatch();

    const handleToDoInput = (e) =>{
        setTodoInput(e.target.value);
      
    }

    const handleAddTodo = (e) =>{
        e.preventDefault()
        dispatch(addTodo(todoInput));
       setTodoInput('');
       
    }
   

    const handleAllCompleted = () =>{
        dispatch(completeAll())
    }

    const handleClearComplete = () =>{
        dispatch(clearCompleted())
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src="./images/notes.png"
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    name="todoInputElement"
                    value = {todoInput}
                    onChange={() => handleToDoInput(event)}
                />
                <button
                    type="submit"
                    className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer"
                onClick={handleAllCompleted}
                >
                    <img
                        className="w-4 h-4"
                        src="./images/double-tick.png"
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearComplete}>Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;