import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Button } from 'reactstrap';

import { getAllProduits } from '../../actions'
import { ProduitCard, Search } from '../../components'



function AdminProduits() {
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
        <div style={{backgroundColor: "black", padding: 3}}>
            <Search 
                setInputOpen={setInputOpen} 
                inputOpen={inputOpen} 
                setInputValue={setInputValue} 
            />
            <hr/>
            <div className="card-Container" >
                {onSearch(produits.produits).map(el => (
                    <div key={el._id}>
                        <ProduitCard el={el} />
                        <Button 
                            color="danger" 
                            style={{
                                position: "relative",
                                bottom: "1.1em",
                                left: "5.4em"
                            }}>
                        Suppprimer produit</Button>
                    </div>   
                ))}
            </div>
        </div>
    )
}

export {AdminProduits} 
