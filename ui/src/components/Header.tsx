import React from 'react'

export const Header = () => {

    const headerStyle: any = {

        width: '100%',
        padding: '2%',
        backgroundColor: "green",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>React Parallel API Calls Typescript</h1>
        </div>
    )
}