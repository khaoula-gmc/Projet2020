import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { MoeCard, ProduitCard, ServiceCard } from '../components'
import { getAllMoes, getAllServices, getAllProduits } from '../actions'


function Home() {
    const moes = useSelector(state => state.moes)
    const produits = useSelector(state => state.produits)
    const services = useSelector(state => state.services)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMoes());
        dispatch(getAllServices());
        dispatch(getAllProduits());
        
    }, [])
    
    return (
        <div>
            <h3>MOES</h3>
            <hr/>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {(moes.moes).slice(0,3).map(el => (
                <MoeCard el={el} key={el._id} /> 
                ))}
            </div>
            <h3>Produits</h3>
            <hr/>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {(produits.produits).slice(0,3).map(el => (
                <ProduitCard style={{size:'50%'}} el={el} key={el._id} />   
                ))}  
            </div>
            <h3>Services</h3>
            <hr/>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {(services.services).slice(0,3).map(el => (
                <ServiceCard el={el} key={el._id} />
                ))}  
            </div>
        </div>
    )
}

export {Home}
