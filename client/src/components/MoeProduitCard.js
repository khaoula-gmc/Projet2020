import React from 'react'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle,
  } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import { useDispatch } from 'react-redux'

  import { deleteProduit } from '../actions'

const MoeProduitCard = ({ el }) => {
    const dispatch = useDispatch()

    const onDelete = () => {
        if(window.confirm("Voulez-vous vraiment supprimer ce produit?")) {
            const produitId = el._id
            dispatch(deleteProduit(produitId))
        } 
    }

    return (
        <div>
            <Card className="card-MoeCard border-warning">
                <CardBody>
                    <CardTitle><span>Nom: </span> {el.nom} </CardTitle>
                </CardBody>
                {<img
                    className="image-MoeCard" 
                    src="https://cutt.ly/gpqaIDZ"
                    alt="No img profile" 
                />}
                <CardBody>
                    <CardText><span>Type: </span> {el.type}</CardText>
                    <CardText><span>Prix: </span> {el.prix} TND</CardText>
                    <CardText><span>Description: </span> {el.description} </CardText>
                    <CardText><span>Date d'ajout: </span> {el.date_ajout} </CardText>
                    <Link 
                        to={{ pathname: "/edit-mes-produits", state: {el} }}
                        className="btn btn-primary btn-sm m-1"
                    >Modifier produit</Link>
                    <Link 
                        to="#" onClick={onDelete} 
                        className="btn btn-danger btn-sm m-1"
                    >Supprimer produit</Link>
                </CardBody>
            </Card>
        </div>
    )
}

export { MoeProduitCard }
