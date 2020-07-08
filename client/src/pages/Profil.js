import React from 'react'
import {useSelector} from 'react-redux'
import {
    Card, 
    CardText,
    CardBody, 
    CardLink,
    CardTitle, 
    CardSubtitle
  } from 'reactstrap';

function Profil() {

    const auth = useSelector(state => state.auth)
    return (
        <div>
           <Card>
                <CardBody>
                    <CardTitle>Société: {auth.profile.nom_societe}</CardTitle>
                    <CardSubtitle>Nom: {auth.profile.prenom} {auth.profile.nom}</CardSubtitle>
                </CardBody>
                {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody>
                    <CardText>Adresse: {auth.profile.adresse}</CardText>
                    <CardText>Activité: {auth.profile.activite}</CardText>
                    <CardText>Description: {auth.profile.description}</CardText>
                    <CardLink href="#">Modifier profil</CardLink>
                    <CardLink href="#">Se désinscrire</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export { Profil } 
