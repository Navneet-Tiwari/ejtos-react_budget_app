import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch,expenses, currency } = useContext(AppContext);
    const handleChange = (event) =>{

        console.log(event.target.value);

        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        if(budget <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });


    }

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: {currency}
            <input
                        // required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        max={20000}
                        step={10}
                        style={{ marginLeft: '0px' , size: 10, width: '150px', height: '25px'}}
                        // onChange={(event) => setBudget(event.target.value)}>
                        onChange={handleChange}
                        >

                        </input>

            </span>

        </div>
    );
};

export default Budget;
