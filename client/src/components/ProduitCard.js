import React from 'react'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle
  } from 'reactstrap';

const ProduitCard = ({ el }) => {
    return (
        <div>
            <Card className="card-MoeCard border-warning" >
                <CardBody>
                    <CardTitle><span>Nom</span> {el.nom} </CardTitle>
                </CardBody>
                {<img
                    className="image-MoeCard" 
                    src="https://cutt.ly/gpqaIDZ"
                    alt="No img profile" 
                />}
                <CardBody>
                    <CardText><span>Type:</span> {el.type}</CardText>
                    <CardText><span>Description</span> {el.description} </CardText>
                    <CardText><span>Date d'ajout</span> {el.date_ajout} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export { ProduitCard }
