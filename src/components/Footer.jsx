import { useDispatch, useSelector } from "react-redux";
import { changeColors, changeStatus } from "../Redux/filter/actions";



const Footer = () => {

    const todos = useSelector(state => state.todos);
   const filters = useSelector(state => state.filters);
   const {status,colors} = filters;
   console.log(filters);
    const todoRemaining = todos.filter(todo => !todo.completed).length;
    const dispatch = useDispatch();

    const numberOfTodos = (no_of_todos) => {
        switch (no_of_todos) {
            case 0:
                return 'No task remaining ';
            case 1:
                return '1 task remaining';
            default:
                return `${no_of_todos} tasks`
        }
    }

    const handleStatusChange = (value) =>{
        dispatch(changeStatus(value));
        
    }

    const handleColor = (value) =>{
        if(colors.includes(value)){
            dispatch(changeColors(value,'removed'))
        }
        else{
            dispatch(changeColors(value,'added'))
        }
        console.log(filters);
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todoRemaining)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className="cursor-pointer font-bold" onClick={()=> handleStatusChange('All')}>All</li>
                <li>|</li>
                <li className="cursor-pointer" onClick={()=> handleStatusChange('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className="cursor-pointer" onClick={()=> handleStatusChange('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                    onClick={()=> handleColor('green')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer
                    ${colors.includes('red') && 'bg-red-500'}
                    `}
                    onClick={()=> handleColor('red')}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer
                    ${colors.includes('yellow') && 'bg-yellow-500'}
                    `}
                    onClick={()=> handleColor('yellow')}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;