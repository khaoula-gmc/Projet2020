import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,  
    FormGroup, 
    Label, 
    Input, 
    FormFeedback 
} from 'reactstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { FloatButton } from './FloatButton'
import { addProduit, clearProduit } from '../actions'

const SaveProduit = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()
    const moeProduits = useSelector(state => state.moeProduits)

    const history = useHistory();

    if(moeProduits.isAdd){
        history.push('/mes-produits')
        dispatch(clearProduit())
    }
 
    const toggle = () => setModal(!modal);
    
    const handleFormSubmit = (values, bag) => {
        dispatch(addProduit(values));
        toggle();
        bag.setSubmitting(false);
    }

    return (
      <div>
        <FloatButton onClick={toggle}/>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Ajouter un produit</ModalHeader>
            <ModalBody>
            <Formik
                initialValues= {{
                    nom: "",
                    type: "",
                    prix: "", 
                    description: ""
                }}
                onSubmit={handleFormSubmit}
                validationSchema = {Yup.object().shape({
                    nom:Yup
                        .string()
                        .required(),
                    type:Yup
                        .string()
                        .required(),
                    prix:Yup
                        .number(), 
                    description:Yup
                        .string()
                })}
            >
                {({
                    handleChange,
                    handleSubmit,
                    isValid,
                    values,
                    isSubmitting,
                    handleBlur,
                    errors,
                    touched
                    }) => (
                        <div>
                            <FormGroup>
                                <Label>Nom</Label>
                                <Input 
                                    valid = {!isValid.nom && touched.nom}
                                    type = "text" 
                                    name = "nom" 
                                    invalid = {errors.nom && touched.nom}
                                    placeholder = "Nom" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.nom}
                                />
                                {errors.nom && touched.nom ? <FormFeedback>{errors.nom}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Type</Label>
                                <Input 
                                    valid = {!isValid.type && touched.type}
                                    type = "select" 
                                    name = "type" 
                                    invalid = {errors.type && touched.type}
                                    placeholder = "type" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.type}
                                >
                                    <option></option>
                                    <option>Porte</option>
                                    <option>Fenetre</option>
                                    <option>Outils</option>
                                    <option>Carelage</option>
                                    <option>Autre</option>
                                </Input>
                                {errors.type && touched.type ? <FormFeedback>{errors.type}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Prix</Label>
                                <Input 
                                    valid = {!isValid.prix && touched.prix}
                                    type = "number" 
                                    name = "prix" 
                                    invalid = {errors.prix && touched.prix}
                                    placeholder = "Prix" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.prix}
                                />
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Description</Label>
                                <Input 
                                    valid = {!isValid.description && touched.description}
                                    type = "text" 
                                    name = "description" 
                                    invalid = {errors.description && touched.description}
                                    placeholder = "Description" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.description}
                                />
                            </FormGroup>
                            <Button 
                                color="primary" 
                                onClick={handleSubmit}
                                disabled={!isValid || isSubmitting}
                            >Ajouter un produit</Button>{' '}
                        </div>
                    )}
                </Formik>           
            </ModalBody> 
        </Modal>
      </div>
    )
  }

  export {SaveProduit}
