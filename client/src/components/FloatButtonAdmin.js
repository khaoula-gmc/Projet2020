import React from 'react'

function FloatButtonAdmin({ onClick, buttonText, right, bgc }) {
    return (
        <div
            style={{
                position: "fixed",
                top: 60,
                right: `${right}`,
                cursor: "pointer"
            }}
        >
            <div 
                onClick={onClick}
                style={{
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    backgroundColor: `${bgc}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    boxShadow: "2px 2px 3px grey"
                }}
            >
                {buttonText}
            </div>
        </div>
    )
}

export {FloatButtonAdmin}
