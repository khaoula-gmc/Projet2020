import React, { useState ,useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Button } from 'reactstrap';

import { getAllServices } from '../../actions'
import { ServiceCard, Search } from '../../components'

function AdminServices() {
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
        <div style={{padding: 3}}>
            <Search 
                setInputOpen={setInputOpen} 
                inputOpen={inputOpen} 
                setInputValue={setInputValue} 
            />
            <hr/>
            <div className="card-Container" >
                {onSearch(services.services).map(el => (
                    <div key={el._id}>
                        <ServiceCard el={el} />
                        <Button 
                            color="danger" 
                            style={{
                                position: "relative",
                                bottom: "1.1em",
                                left: "7.1em"
                            }}>
                        Suppprimer service</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {AdminServices} 
