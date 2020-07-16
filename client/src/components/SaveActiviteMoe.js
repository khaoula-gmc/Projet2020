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
import { addActiviteMoe, clearActiviteMoe } from '../actions'

const SaveActiviteMoe = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()
    const activitesMoe = useSelector(state => state.activitesMoe)

    const history = useHistory();

    if(activitesMoe.isAdd){
        history.push('/admin-control')
        dispatch(clearActiviteMoe())
    }
 
    const toggle = () => setModal(!modal);
    
    const handleFormSubmit = (values, bag) => {
        dispatch(addActiviteMoe(values));
        toggle();
        bag.setSubmitting(false);
    }

    return (
      <div>
            <FloatButtonAdmin onClick={toggle} buttonText="A" right= "40px" bgc="#28a745"/>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Ajouter activite Moe</ModalHeader>
                <ModalBody>
                <Formik
                    initialValues= {{
                        activite: ""
                    }}
                    onSubmit={handleFormSubmit}
                    validationSchema = {Yup.object().shape({
                        activite:Yup
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
                                    <Label>Activite</Label>
                                    <Input 
                                        valid = {!isValid.activite && touched.activite}
                                        type = "text" 
                                        name = "activite" 
                                        invalid = {errors.activite && touched.activite}
                                        placeholder = "Activite" 
                                        onChange = {handleChange}
                                        onBlur = {handleBlur}
                                        value = {values.activite}
                                    />
                                    {errors.activite && touched.activite ? <FormFeedback>{errors.activite}</FormFeedback> : null}
                                </FormGroup>

                                <Button 
                                    color="primary" 
                                    onClick={handleSubmit}
                                    disabled={!isValid || isSubmitting}
                                >Ajouter une activite Moe</Button>{' '}
                            </div>
                        )}
                    </Formik>           
                </ModalBody> 
            </Modal>
      </div>
    )
  }

  export {SaveActiviteMoe}