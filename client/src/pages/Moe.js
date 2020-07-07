import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {
    Card, 
    CardText,
    CardBody, 
    CardTitle, 
    CardSubtitle
  } from 'reactstrap';
import { getAllMoes } from '../actions/moe.action';



function Moe() {
    const getAll = useSelector(state=>state.moes)

    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getAllMoes());
    }, [])

    return (
        <div>
            {getAll.moes.map((el,i) => (
                <Card key={i}>
                    <CardBody>
                        <CardTitle>Société:{el.nom_societe} </CardTitle>
                        <CardSubtitle>Nom: </CardSubtitle>
                    </CardBody>
                    {/* <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                    <CardBody>
                        <CardText>Adresse: </CardText>
                        <CardText>Activité: </CardText>
                        <CardText>Description: </CardText> 
                    </CardBody>
                </Card>
             ) )}
        </div>
    )
}

export {Moe} 
