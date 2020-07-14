import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, 
    CardText,
    CardBody 
  } from 'reactstrap';

const Admin = () => {
    return (
        <div className="admin-container">
            <h1>ADMIN</h1>
            <div className="admin">
                <Card className="card-MoeCard border-warning" >
                    {<img
                        className="image-MoeCard" 
                        src="https://cutt.ly/gpqaIDZ"
                        alt="No img profile" 
                    />}
                    <CardBody>
                        <Link to="/admin-produits">
                            <CardText> Tous les Produits</CardText>
                        </Link>
                    </CardBody>
                </Card>

                <Card className="card-MoeCard border-info" >
                    {<img
                        className="image-MoeCard" 
                        src="https://cutt.ly/gpqaIDZ"
                        alt="No img profile" 
                    />}
                    <CardBody>
                        <Link to="/admin-services">
                            <CardText> Tous les Services</CardText>
                        </Link>
                    </CardBody>
                </Card>
                
                <Card className="card-MoeCard border-success" >
                    {<img
                        className="image-MoeCard" 
                        src="https://cutt.ly/YpAbDna"
                        alt="No img profile" 
                    />}
                    <CardBody>
                        <Link to="/admin-moes">
                            <CardText> Tous les Moes</CardText>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export {Admin}
