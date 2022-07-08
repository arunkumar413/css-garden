import React, { useState, useEffect, useRef } from 'react'
import Gradients from '../styles/gradients.module.css'


const gradientDivStyle = {
    borderRadius: 10,
    textAlign: 'center',
    padding: 5,
    margin: 5,
    fontSize: '1rem',
    height: "5rem",
    verticalAlign: 'middle'
}


export function GradientsDemo(props) {


    var elements = Object.keys(Gradients).map(function (e, i) {
        return (
            <div key={i.toString()} style={gradientDivStyle} className={Gradients[e]}>

                <span>
                    {'.' + e}
                </span>


            </div>
        );
    });

    return (
        <div>
            <div className='textGradientsContainer'>
                {elements}
            </div>
        </div >

    )

}