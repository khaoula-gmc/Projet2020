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
import { addTypeService, clearTypeService} from '../actions'

const SaveTypeService = () => {
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch()
    const typesServices = useSelector(state => state.typesServices)

    const history = useHistory();

    if(typesServices.isAdd){
        history.push('/admin-control')
        dispatch(clearTypeService())
    }
 
    const toggle = () => setModal(!modal);
    
    const handleFormSubmit = (values, bag) => {
        dispatch(addTypeService(values));
        toggle();
        bag.setSubmitting(false);
    }

    return (
      <div>
            <FloatButtonAdmin onClick={toggle} buttonText="TS" right="180px" bgc="#17a2b8"/>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Ajouter type service</ModalHeader>
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
                                >Ajouter un type de service </Button>{' '}
                            </div>
                        )}
                    </Formik>           
                </ModalBody> 
            </Modal>
      </div>
    )
  }

  export {SaveTypeService}