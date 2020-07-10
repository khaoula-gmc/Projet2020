import React from 'react'

function FloatButton({ onClick }) {
    return (
        <div className="float-button">
            <div className="container-floatButton" onClick={onClick}>
                <i className="fa fa-plus" />
            </div>
        </div>
    )
}

export {FloatButton}
