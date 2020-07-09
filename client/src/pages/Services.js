import React, { useState ,useEffect } from 'react'

import { useDispatch ,useSelector } from 'react-redux'

import { getAllServices } from '../actions'
import { ServiceCard, Search } from '../components'

function Services() {
    const [inputOpen, setInputOpen] = useState("");
    const [inputValue, setInputValue] = useState("");

    const services = useSelector(state => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(getAllServices());
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
                {onSearch(services.services).map(el => (
                    <ServiceCard el={el} key={el._id} />
                ))}
            </div>
        </div>
    )
}

export {Services} 
