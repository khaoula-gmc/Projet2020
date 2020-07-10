import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { MoeForm } from '../components'
import { signUp } from '../actions'

const SignUp = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    let history = useHistory()
    
    if(auth.isSignUp) {
        history.push('/login')
    }
    
    const handleFormSubmit = (values, bag) => {
        dispatch(signUp(values));
        bag.setSubmitting(false)
    }
    
    return (
        <MoeForm 
            buttonText="S'inscrire"
            onSubmit={handleFormSubmit}
            error={auth.error}
            titleText="Créer un compte"
        />
    )
}

export {SignUp}