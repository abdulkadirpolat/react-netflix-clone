import React from 'react'

function Row({children,className,props}) {
    return (
        <div className={className} {...props} >
            {children ? children :" hello row"}
        </div>
    )
}

export default Row
