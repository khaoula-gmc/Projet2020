import React, {useEffect} from 'react'
import { Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Button, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap'
import { getActiviteMoe } from '../actions'

const  MoeForm = ({buttonText = "", onSubmit, moe = {}, error, titleText = ""}) => {
    const activitesMoe = useSelector(state => state.activitesMoe);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getActiviteMoe())
    }, [])

    const { 
        nom = "", 
        prenom = "", 
        email = "", 
        password = "", 
        nom_societe = "", 
        adresse = "",
        telephone = "", 
        activite = "", 
        description = ""
    } = moe
    return (
        <div className="form">
           <h3>{titleText}</h3> 
           <hr/>

           {error && <Alert color="danger">{error}</Alert>}

           <Formik
                initialValues= {{
                    nom, 
                    prenom, 
                    email, 
                    password, 
                    nom_societe, 
                    adresse,
                    telephone, 
                    activite, 
                    description
                }}
                onSubmit = {onSubmit} 
                validationSchema = {Yup.object().shape({
                    nom:Yup
                        .string()
                        .required(),
                    prenom:Yup
                        .string()
                        .required(),
                    email:Yup
                        .string() 
                        .email()
                        .required(),
                    password:Yup
                        .string()
                        .min(6)
                        .required(),
                    nom_societe:Yup
                        .string()
                        .required(),
                    adresse:Yup
                        .string()
                        .required(),
                    telephone:Yup
                        .number()
                        .required(),
                    activite:Yup
                        .string()
                        .required(),
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
                                <Label>Prénom</Label>
                                <Input 
                                    valid = {!isValid.prenom && touched.prenom}
                                    type = "text" 
                                    name = "prenom" 
                                    invalid = {errors.prenom && touched.prenom}
                                    placeholder = "Prénom" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.prenom}
                                />
                                {errors.prenom && touched.prenom ? <FormFeedback>{errors.prenom}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>E-mail</Label>
                                <Input 
                                    valid = {!isValid.email && touched.email}
                                    type = "email" 
                                    name = "email" 
                                    invalid = {errors.email && touched.email}
                                    placeholder = "E-mail" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.email}
                                />
                                {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Password</Label>
                                <Input 
                                    valid = {!isValid.password && touched.password}
                                    type = "password" 
                                    name = "password" 
                                    invalid = {errors.password && touched.password}
                                    placeholder = "password" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.password}
                                />
                                {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Nom de la Société</Label>
                                <Input 
                                    valid = {!isValid.nom_societe && touched.nom_societe}
                                    type = "text" 
                                    name = "nom_societe" 
                                    invalid = {errors.nom_societe && touched.nom_societe}
                                    placeholder = "Nom de la Société" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.nom_societe}
                                />
                                {errors.nom_societe && touched.nom_societe ? <FormFeedback>{errors.nom_societe}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Adresse</Label>
                                <Input 
                                    valid = {!isValid.adresse && touched.adresse}
                                    type = "text" 
                                    name = "adresse" 
                                    invalid = {errors.adresse && touched.adresse}
                                    placeholder = "Adresse" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.adresse}
                                />
                                {errors.adresse && touched.adresse ? <FormFeedback>{errors.adresse}</FormFeedback> : null}
                            </FormGroup>

                            <FormGroup>
                                <Label>Telephone</Label>
                                <Input 
                                    valid = {!isValid.telephone && touched.telephone}
                                    type = "number" 
                                    name = "telephone" 
                                    invalid = {errors.telephone && touched.telephone}
                                    placeholder = "Telephone" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.telephone}
                                />
                                {errors.telephone && touched.telephone ? <FormFeedback>{errors.telephone}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Activite</Label>
                                <Input 
                                    valid = {!isValid.activite && touched.activite}
                                    type = "select" 
                                    name = "activite" 
                                    invalid = {errors.activite && touched.activite}
                                    placeholder = "Activite" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.activite}
                                >
                                    <option></option>
                                    {activitesMoe.activitesMoe.map(el => (
                                        <option key={el._id}>{el.activite}</option>
                                    ))}
                                </Input>
                                {errors.activite && touched.activite ? <FormFeedback>{errors.activite}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label>Description</Label>
                                <Input 
                                    type = "textarea" 
                                    name = "description"  
                                    placeholder = "Description" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                    value = {values.description}
                                />
                            </FormGroup>

                            <Button 
                                color = 'primary' 
                                block onClick = {handleSubmit} 
                                disabled={!isValid || isSubmitting}
                            >{buttonText}</Button>

                            <Link to="/login"> Vous avez un compte? Se connecter</Link>
                        </div>
                    )}
                </Formik>
        </div>
    )
}

export {MoeForm}