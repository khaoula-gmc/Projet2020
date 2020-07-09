import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { getAllProduits } from '../actions'
import { ProduitCard, Search } from '../components'



function Produits() {
    const [inputOpen, setInputOpen] = useState("");
    const [inputValue, setInputValue] = useState("");
    
    const produits = useSelector(state => state.produits)
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getAllProduits());
    }, [])

    const onSearch = (toSearch) => {
        switch(inputOpen) {
            case "Nom":
                return toSearch.filter(el => (
                    el.nom.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                )) 

            case "Type":
                return toSearch.filter(el => (
                    el.type.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
               ))
            
            default:
                return toSearch
        }
    }

    return (
        <div>
            <Search 
                    setInputOpen={setInputOpen} 
                    inputOpen={inputOpen} 
                    setInputValue={setInputValue} 
                />

            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
                {onSearch(produits.produits).map(el => (
                    <ProduitCard el={el} key={el._id} />   
                ))}
            </div>
        </div>
    )
}

export {Produits} 
