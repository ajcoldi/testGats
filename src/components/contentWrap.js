import React from 'react'
import '../styles/index.scss'
import './contentWrap.scss'

const ContentWrap = (props) => {
    return (
        <div>
            <div className="contentContainer">
                {props.children}
            </div>
        </div> 
    )
}

export default ContentWrap