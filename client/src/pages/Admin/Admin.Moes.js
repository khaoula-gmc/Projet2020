import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllMoes } from '../../actions'
import { MoeCard, Search } from '../../components'
import { Button } from 'reactstrap';



function AdminMoes() {

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
                    el.nom.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
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
        <div style={{backgroundColor: "black", padding: 3}}>
            <Search 
                setInputOpen={setInputOpen} 
                inputOpen={inputOpen} 
                setInputValue={setInputValue} 
            />
            <hr/>
            <div className="card-Container">
                {onSearch(moes.moes).map((el,i) => (
                    <div key={el._id}>
                        <MoeCard el={el} />   
                        <Button 
                            color="danger" 
                            style={{
                                position: "relative",
                                bottom: "1.1em",
                                left: "6em"
                            }}>
                        Suppprimer moe</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {AdminMoes}