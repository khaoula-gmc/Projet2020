import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getAllProduits } from '../actions'
import { ProduitCard } from '../components'



function Produits() {
    const produits = useSelector(state => state.produits)

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getAllProduits());
    }, [])

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
            {produits.produits.map(el => (
                <ProduitCard el={el} key={el._id} />   
            ))}
        </div>
    )
}

export {Produits} 
