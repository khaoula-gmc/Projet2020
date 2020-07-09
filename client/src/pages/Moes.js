import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import { getAllMoes } from '../actions'
import { MoeCard } from '../components'



function Moes() {
    const moes = useSelector(state=>state.moes)

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getAllMoes());
    }, [])

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
            {moes.moes.map(el => (
                <MoeCard el={el} key={el._id} />   
            ))}
        </div>
    )
}

export {Moes} 
