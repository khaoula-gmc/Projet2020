import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle,
    Button
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'

import { SaveActiviteMoe } from '../../components/SaveActiviteMoe'
import { 
    getActiviteMoe,
    updateActiviteMoe,
    deleteActiviteMoe, 
    getTypeProduit,
    updateTypeProduit,
    deleteTypeProduit, 
    getTypeService,
    updateTypeService,
    deleteTypeService 
} from '../../actions';
import { SaveTypeProduit } from '../../components';
import { SaveTypeService } from '../../components';


const AdminControl = () => {
    const activitesMoe = useSelector(state => state.activitesMoe);
    const typesProduits = useSelector(state => state.typesProduits)
    const typesServices = useSelector(state => state.typesServices)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActiviteMoe());
        dispatch(getTypeProduit())
        dispatch(getTypeService())
       }, [])
    
    const onDeleteTypeProduit = (el) => {
        if(window.confirm("Voulez-vous vraiment supprimer ce produit?")) {
            const produitId = el._id
            console.log(produitId)
            dispatch(deleteTypeProduit(produitId))
        } 
    }

    const onDeleteTypeService = (el) => {
        if(window.confirm("Voulez-vous vraiment supprimer ce service?")) {
            const serviceId = el._id
            dispatch(deleteTypeService(serviceId))
        } 
    }

    const onDeleteActiviteMoe = (el) => {
        if(window.confirm("Voulez-vous vraiment supprimer cette activité?")) {
            const moeId = el._id
            dispatch(deleteActiviteMoe(moeId))
        } 
    }

    return (
        <div className="admin-container">
            <SaveActiviteMoe />
            <SaveTypeProduit />
            <SaveTypeService />
            <h1>Control</h1>
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

                <Card className="border-warning card-adminCard">
                    <CardBody>
                        <CardTitle>Types Produits: </CardTitle>
                        {typesProduits.typesProduits.map(el => (
                            <CardText key={el._id} className="card-adminText">
                                    <li>{el.type}</li>
                                    <Button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onDeleteTypeProduit(el)}
                                    >Supprimer</Button>
                            </CardText>
                        ))}
                    </CardBody>
                </Card>

                <Card className="border-info card-adminCard">
                    <CardBody>
                        <CardTitle>Types Services: </CardTitle>
                        {typesServices.typesServices.map(el => (
                            <CardText key={el._id} className="card-adminText">
                                    <li>{el.type}</li> 
                                    <Button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onDeleteTypeService(el)}
                                    >Supprimer</Button>
                            </CardText>
                        ))}
                    </CardBody>
                </Card>

                <Card className="border-success card-adminCard">
                    <CardBody>
                        <CardTitle>Activites Moe: </CardTitle>
                        {activitesMoe.activitesMoe.map(el => (
                            <CardText key={el._id} className="card-adminText">
                                    <li>{el.activite}</li>
                                    <Button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onDeleteActiviteMoe(el)}
                                    >Supprimer</Button>
                            </CardText>
                        ))}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export {AdminControl}
