import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency} = useContext(AppContext);
    const { dispatch} = useContext(AppContext);
    // const currencies = [
    //     { label: "$ Dollar", value: "$ Dollar" },
    //     { label: "£ Pound", value: "£ Pound" },
    //     { label: "€ Euro", value: "€ Euro" },
    //     { label: "₹ Ruppee", value: "₹ Ruppee" }
    // #d1e7dd
    //   ];

    function getSelval(curr){ 
        if(curr === currency){
            return true;
        } else{
            return false ;
        }
    }
    const handleCurrChange = (event) =>{

        console.log(event.target.value);        

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            {/* <span>Currency: ({currency})</span> */}
            <span style={{backgroundColor: '#d1e7dd'}}>
                Currency &nbsp;
                {/* <select className="custom-select" options={currencies}></select>  */}
                <select  id="inputGroupSelect09" 
                 style={{border: "none", backgroundColor: '#d1e7dd'}}
                // onChange={(event) => setAction(event.target.value)}
                onChange={handleCurrChange}
                >
                        {/* <option defaultValue value={currency} name={currency}>{currency}</option> */}
                        <option value="$" name="$ Dollar" selected={getSelval('$ Dollar')}>$ Dollar</option>
                        <option value="£" name="£ Pound" selected={getSelval('£')}>£ Pound</option>
                        <option value="€" name="€ Euro" selected={getSelval('€')}>€ Euro</option>
                        <option value="₹" name="₹ Ruppee" selected={getSelval('₹')}>₹ Ruppee</option>
                  </select>
                
            </span>
        </div>
    );
};

export default Currency;