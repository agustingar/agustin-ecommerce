import { Button } from '@mui/material'
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useForm } from 'react-hook-form'
import { useStateValue } from '../../StateProvider'
import './Payment.css'


const PaymentForms = ({nextStep}) => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

 const [{cardData}, dispatch] = useStateValue();
 const methods = useForm();



    return (
        <div className="card">
            <div className="card-body">

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form onSubmit={methods.handleSubmit(data => {
       dispatch ({
        type: "SET_DATACARD",
        cardData: data,
       });
nextStep();
       })}> 
                    <div className="form-group">
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="30"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="expiry">Fecha de expiración</label>
                            <input
                                type= "text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="cvc">CVC</label>
                            <input
                                 type="text"

                                name="cvc"
                                id="cvc"
                                maxLength="3"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />                   
                        </div> <Button type='submit' variant='contained' color='primary'>Next</Button>  
                    </div>
                     </form>                    


            </div>
        </div>
    )
}

export default PaymentForms