import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllMoes } from '../actions'
import { MoeCard, Search } from '../components'



function Moes() {

    const [inputOpen, setInputOpen] = useState("");
    const [inputValue, setInputValue] = useState("");
    const moes = useSelector(state=>state.moes)
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getAllMoes());
    }, [])

    const onSearch = (toSearch) => {
        switch(inputOpen) {
            case "Nom":
                return toSearch.filter(el => (
                    el.nom.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ||
                    el.prenom.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                )) 

            case "Type":
                return toSearch.filter(el => (
                    el.activite.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
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
            <hr/>
            <div className="card-Container" >
                {onSearch(moes.moes).map(el => (
                    <MoeCard el={el} key={el._id} />   
                ))}
            </div>
        </div>
    )
}

export {Moes} 
