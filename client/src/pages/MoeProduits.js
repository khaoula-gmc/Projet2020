import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getProduit } from '../actions/moeProduits.action'
import { MoeProduitCard } from '../components'

import { SaveProduit } from '../components'

const MoeProduits = () => {
    const moeProduits = useSelector(state => state.moeProduits)

    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getProduit(moeProduits));
    }, [])

    return (
        <div>
            <SaveProduit />
            <div className="card-Container" >
                {moeProduits.moeProduits.map(el => (
                    <MoeProduitCard el={el} key={el._id} />   
                ))}
            </div>
        </div>
    )
}

export {MoeProduits} 
