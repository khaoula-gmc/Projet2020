import React from 'react'
import {useSelector} from 'react-redux'
import { Alert } from 'reactstrap';

const ErrorMessage = () => {
    const error = useSelector(state => state.errors)
    if(error.message) {
        return (
            <div>
                <Alert color="danger">
                    {error.message}
                </Alert>
            </div>
        )
    }

    return <></>
}

export {ErrorMessage}
