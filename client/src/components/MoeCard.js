import React from 'react'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle, 
  } from 'reactstrap';



const MoeCard = ({ el }) => {
    return (
        <div>
            <Card className="card-MoeCard border-success" >
                <CardBody>
                    <CardTitle><span>Société:</span> {el.nom_societe} </CardTitle>
                    <CardText><span>Nom:</span> {el.nom} {el.prenom} </CardText>
                </CardBody>
                {<img
                    className="image-MoeCard" 
                    src="https://cutt.ly/YpAbDna"
                    alt="No img profile" 
                />}
                <CardBody>
                    <CardText><span>Adresse:</span> {el.adresse} </CardText>
                    <CardText><span>Activité:</span> {el.activite} </CardText>
                    <CardText><span>Description:</span> {el.description} </CardText> 
                </CardBody>
            </Card>
        </div>
    )
}

export { MoeCard }
