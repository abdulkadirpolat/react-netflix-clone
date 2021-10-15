import React from 'react'

function BillBoardAnimation({className, ...props}) {
    console.log(props)
    return (
        <div className= { className} {...props} >
            bilboard
        </div>
    )
}

export default BillBoardAnimation
