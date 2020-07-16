import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle 
  } from 'reactstrap'

  import { deleteMoe } from '../actions'

function Profil() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const onDelete = () => {
        if(window.confirm("Voulez-vous vraiment supprimer votre compte?")) {
            const moeId = auth.profile._id
            dispatch((deleteMoe(moeId)))
        } 
    }
   
    return (
        <div className="card-Profile">
           <Card style={{padding: 10}} className="border-success">
                {<img
                    className="image-MoeCard" 
                    src="https://cutt.ly/YpAbDna"
                    alt="No img profile" 
                />}
                <CardBody>
                    <CardTitle><span>Société:</span> {auth.profile.nom_societe}</CardTitle>
                    <CardText><span>Nom:</span> {auth.profile.prenom} {auth.profile.nom}</CardText>
                    <CardText><span>Description:</span> {auth.profile.telephone}</CardText>
                    <CardText><span>Adresse:</span> {auth.profile.adresse}</CardText>
                    <CardText><span>Activité:</span> {auth.profile.activite}</CardText>
                    <CardText><span>Description:</span> {auth.profile.description}</CardText>
                    <Link 
                        to={{ pathname: "/edit-moe", state: {...auth.profile} }}
                        className="btn btn-primary btn-sm m-1"
                    >Modifier profil</Link>
                    <Link 
                        to="#" onClick={onDelete} 
                        className="btn btn-danger btn-sm m-1"
                    >Se désinscrire</Link>
                </CardBody>
            </Card>
        </div>
    )
}

export { Profil } 
