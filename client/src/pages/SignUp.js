import React from 'react'
import {Formik} from 'formik'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import { Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function SignUp() {
    const handleFormSubmit=(values)=>{
            console.log(values)
    }
    return (
        <div style={{padding:20}}>
           <h3>Créer un compte</h3> 
           <hr/>
           <Formik
                initialValues={{
                    nom: "", 
                    prenom: "", 
                    email: "", 
                    password: "", 
                    nom_societe: "", 
                    adresse: "", 
                    activite: "", 
                    description: ""
                }}
                onSubmit = {handleFormSubmit} 
                validationSchema = {Yup.object().shape({
                    nom:Yup
                        .string()
                        .required(),
                    prenom:Yup
                        .string()
                        .required(),
                    email:Yup
                        .string() //we can add errors here
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
                    isSubmitting,
                    handleBlur,
                    errors,
                    touched
                    }) => (
                        <div>
                            <FormGroup>
                                <Label for = "Nom">Nom</Label>
                                <Input 
                                    valid = {!isValid.nom && touched.nom}
                                    type = "text" 
                                    name = "nom" 
                                    id = "Nom" 
                                    invalid = {errors.nom && touched.nom}
                                    placeholder = "Nom" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.nom && touched.nom ? <FormFeedback>{errors.nom}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Prenom">Prénom</Label>
                                <Input 
                                    valid = {!isValid.prenom && touched.prenom}
                                    type = "text" 
                                    name = "prenom" 
                                    id = "Prenom" 
                                    invalid = {errors.prenom && touched.prenom}
                                    placeholder = "Prénom" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.prenom && touched.prenom ? <FormFeedback>{errors.prenom}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Email">E-mail</Label>
                                <Input 
                                    valid = {!isValid.email && touched.email}
                                    type = "email" 
                                    name = "email" 
                                    id = "Email" 
                                    invalid = {errors.email && touched.email}
                                    placeholder = "E-mail" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.email && touched.email ? <FormFeedback>{errors.email}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Password">Password</Label>
                                <Input 
                                    valid = {!isValid.password && touched.password}
                                    type = "password" 
                                    name = "password" 
                                    id = "Password" 
                                    invalid = {errors.password && touched.password}
                                    placeholder = "password" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.password && touched.password ? <FormFeedback>{errors.password}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Nom_Societe">Nom de la Société</Label>
                                <Input 
                                    valid = {!isValid.nom_societe && touched.nom_societe}
                                    type = "text" 
                                    name = "nom_societe" 
                                    id = "Nom_Societe" 
                                    invalid = {errors.nom_societe && touched.nom_societe}
                                    placeholder = "Nom de la Société" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.nom_societe && touched.nom_societe ? <FormFeedback>{errors.nom_societe}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Adresse">Adresse</Label>
                                <Input 
                                    valid = {!isValid.adresse && touched.adresse}
                                    type = "text" 
                                    name = "adresse" 
                                    id = "Adresse" 
                                    invalid = {errors.adresse && touched.adresse}
                                    placeholder = "Adresse" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                                {errors.adresse && touched.adresse ? <FormFeedback>{errors.adresse}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Activite">Activite</Label>
                                <Input 
                                    valid = {!isValid.activite && touched.activite}
                                    type = "select" 
                                    name = "activite" 
                                    id = "Activite" 
                                    invalid = {errors.activite && touched.activite}
                                    placeholder = "Activite" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                >
                                    <option></option>
                                    <option>Archtecture</option>
                                    <option>Entreprenariat</option>
                                    <option>Menuiserie</option>
                                    <option>Quincaillerie</option>
                                    <option>Autre</option>
                                </Input>
                                {errors.activite && touched.activite ? <FormFeedback>{errors.activite}</FormFeedback> : null}
                            </FormGroup>
    
                            <FormGroup>
                                <Label for = "Description">Description</Label>
                                <Input 
                                    type = "textarea" 
                                    name = "description" 
                                    id = "Description" 
                                    placeholder = "Description" 
                                    onChange = {handleChange}
                                    onBlur = {handleBlur}
                                />
                            </FormGroup>

                            <Button color = 'primary' block onClick = {handleSubmit} disabled={!isValid || isSubmitting}>S'inscrire</Button>

                            <Link to="/login"> Vous avez un compte? Se connecter</Link>
                        </div>
                    )}
                </Formik>
        </div>
    )
}

export {SignUp}