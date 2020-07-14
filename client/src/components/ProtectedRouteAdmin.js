import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRouteAdmin = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth)
    return (
        <Route
            {...rest}
            render = { props => auth.isAuth ? <Component {...props} /> : <Redirect to = "/admin-login"/> }
        />
    )
}

export default ProtectedRouteAdmin
