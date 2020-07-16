import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRouteAdmin = ({component: Component, ...rest}) => {
    const admin = useSelector(state => state.admin)
    return (
        <Route
            {...rest}
            render = { props => admin.isAuth ? <Component {...props} /> : <Redirect to = "/admin-login"/> }
        />
    )
}

export default ProtectedRouteAdmin
