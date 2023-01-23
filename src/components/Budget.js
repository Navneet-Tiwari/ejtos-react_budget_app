import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch,expenses } = useContext(AppContext);
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
            <span>Budget: £
            <input
                        // required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        max={20000}
                        step={10}
                        // style={{ marginLeft: '2rem' , size: 10}}
                        // onChange={(event) => setBudget(event.target.value)}>
                        onChange={handleChange}
                        >

                        </input>

            </span>

        </div>
    );
};

export default Budget;
