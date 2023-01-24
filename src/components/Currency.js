import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency} = useContext(AppContext);
    // const currencies = [
    //     { label: "$ Dollar", value: "$ Dollar" },
    //     { label: "£ Pound", value: "£ Pound" },
    //     { label: "€ Euro", value: "€ Euro" },
    //     { label: "₹ Ruppee", value: "₹ Ruppee" }
    // #d1e7dd
    //   ];

    return (
        <div className='alert alert-secondary'>
            {/* <span>Currency: ({currency})</span> */}
            <span className="alert alert-success">
                Currency
                {/* <select className="custom-select" options={currencies}></select>  */}
                <select  id="inputGroupSelect09" 
                 style={{border: "none"}}
                // onChange={(event) => setAction(event.target.value)}
                >
                        {/* <option defaultValue value={currency} name={currency}>{currency}</option> */}
                        <option value="$ Dollar" name="$ Dollar">$ Dollar</option>
                        <option value="£ Pound" name="£ Pound" selected>£ Pound</option>
                        <option value="€ Euro" name="€ Euro">€ Euro</option>
                        <option value="₹ Ruppee" name="₹ Ruppee">₹ Ruppee</option>
                  </select>
            </span>
        </div>
    );
};

export default Currency;