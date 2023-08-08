import React from 'react'

export default function modal({isOpen}) {
    const backGround_style = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0,0,0, 0.7)',
        zIndex: '1000',

    }
    const modal_style ={
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '150px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        color: 'black',

    }

    if(isOpen){

        return (
            <div style = {backGround_style}>
                <div style = {modal_style}>modal</div>

             </div>
        )
    }
    return null
  
  
}
