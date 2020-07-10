import React, { useEffect } from 'react'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle,
  } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import {useDispatch, useSelector} from 'react-redux'

  import { deleteService, getService } from '../actions'

const MoeServiceCard = ({ el }) => {
    const dispatch = useDispatch()
    const moeServices = useSelector(state => state.moeServices)

    const onDelete = () => {
        if(window.confirm("Voulez-vous vraiment supprimer ce service?")) {
            const serviceId = el._id
            dispatch(deleteService(serviceId))
        } 
    }
    
    useEffect(() => {
        dispatch(getService())
    }, [])

    return (
        <div>
            <Card className="card-MoeCard" >
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
                    <CardText><span>Description: </span> {el.description} </CardText>
                    <Link 
                        to={{ pathname: "/edit-mes-services", state: {el} }}
                        className="btn btn-secondary btn-sm m-1"
                    >Modifier service</Link>
                    <Link 
                        to="#" onClick={onDelete} 
                        className="btn btn-secondary btn-sm m-1"
                    >Supprimer service</Link>
                </CardBody>
            </Card>
        </div>
    )
}

export { MoeServiceCard }
