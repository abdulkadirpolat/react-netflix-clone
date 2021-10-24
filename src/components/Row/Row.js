import React from 'react'


const Row =({children, className, ...props})=> {
    const title = "title"
    return (
        <div className={className} {...props} >
            {/* {children ? children :" hello row"} */}
            <h2>{title} </h2>
            <div className="row-container">
                <div>
                    <div className="slider">
          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row
