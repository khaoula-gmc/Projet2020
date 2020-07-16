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

import { FloatButtonAdmin } from './FloatButtonAdmin'
import { addTypeProduit, clearTypeProduit} from '../actions'

const SaveTypeProduit = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()
    const typesProduits = useSelector(state => state.typesProduits)

    const history = useHistory();

    if(typesProduits.isAdd){
        history.push('/admin-control')
        dispatch(clearTypeProduit())
    }
 
    const toggle = () => setModal(!modal);
    
    const handleFormSubmit = (values, bag) => {
        dispatch(addTypeProduit(values));
        toggle();
        bag.setSubmitting(false);
    }

    return (
      <div>
            <FloatButtonAdmin onClick={toggle} buttonText="TP" right="110px" bgc="#ffc107"/>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Ajouter type produit</ModalHeader>
                <ModalBody>
                <Formik
                    initialValues= {{
                        type: ""
                    }}
                    onSubmit={handleFormSubmit}
                    validationSchema = {Yup.object().shape({
                        type:Yup
                            .string()
                            .required(),
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
                                    <Label>Type</Label>
                                    <Input 
                                        valid = {!isValid.type && touched.type}
                                        type = "text" 
                                        name = "type" 
                                        invalid = {errors.type && touched.type}
                                        placeholder = "Type" 
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        value = {values.type}
                                    />
                                    {errors.type && touched.type ? <FormFeedback>{errors.type}</FormFeedback> : null}
                                </FormGroup>

                                <Button 
                                    color="primary" 
                                    onClick={handleSubmit}
                                    disabled={!isValid || isSubmitting}
                                >Ajouter un type de produit </Button>{' '}
                            </div>
                        )}
                    </Formik>           
                </ModalBody> 
            </Modal>
      </div>
    )
  }

  export {SaveTypeProduit}