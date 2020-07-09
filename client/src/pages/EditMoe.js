import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { MoeForm } from '../components'
import { updateMoe, reset } from '../actions'

const EditMoe = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    let location = useLocation();
    let history = useHistory()
    
    let moe;

    try {
        moe = location.state
    } catch (err) {
        moe = undefined
    }

    if(auth.isUpdate) {
        history.push('/')
        dispatch(reset())
    }
    
    const handleFormSubmit = (values, bag) => {
        moe = location.state
        values._id = moe._id
        dispatch(updateMoe(values))
        bag.setSubmitting(false)
        console.log(moe)
    }
    
    return (
        <MoeForm 
        buttonText="Enregistrer votre modification"
        moe={moe}
        onSubmit={handleFormSubmit}
        error={auth.error}
        titleText="Modifier mon profil"
        />
    )
}

export {EditMoe}