import React from 'react'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle, 
    CardSubtitle
  } from 'reactstrap';



function MoeCard({ el }) {
    return (
        <div>
            <Card style={{margin: 20}}>
                <CardBody>
                    <CardTitle>Société: {el.nom_societe} </CardTitle>
                    <CardSubtitle>Nom: {el.nom} {el.prenom} </CardSubtitle>
                </CardBody>
                {<img  
                    style={{width: "7em", height: "8em", margin: "2em"}}
                    src="https://urlz.fr/dqyn" 
                    alt="Card No Image" />}
                <CardBody>
                    <CardText>Adresse: {el.adresse} </CardText>
                    <CardText>Activité: {el.activite} </CardText>
                    <CardText>Description: {el.description} </CardText> 
                </CardBody>
            </Card>
        </div>
    )
}

export default MoeCard
