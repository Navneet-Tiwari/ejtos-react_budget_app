import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FcPlus } from "react-icons/fc"; //FcPlus
import { AiFillMinusCircle } from "react-icons/ai"; //AiFillMinusCircle
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
        <td><FcPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        {/* <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td> */}
        <td><AiFillMinusCircle size='1.5em' style={{ fill: '#c70707' }} onClick={event=> decreaseAllocation(props.name)}></AiFillMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
