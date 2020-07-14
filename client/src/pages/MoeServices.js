import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getService } from '../actions/moeServices.action'
import { MoeServiceCard } from '../components'

import { SaveService } from '../components'

const MoeServices = () => {
    const moeServices = useSelector(state => state.moeServices)

    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getService(moeServices));
    }, [])

    return (
        <div>
            <SaveService />
            <div className="card-Container" >
                {moeServices.moeServices.map(el => (
                    <MoeServiceCard el={el} key={el._id} />   
                ))}
            </div>
        </div>
    )
}

export {MoeServices} 
