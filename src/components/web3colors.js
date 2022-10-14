import React, { useState, useEffect, useRef } from 'react'
import w3Colors from '../styles/w3.module.css';


const gradientDivStyle = {
    borderRadius: 10,
    textAlign: 'center',
    padding: "2rem",
    margin: 5,
    fontSize:'1rem'
}


export function Web3Colors(props) {


    var elements = Object.keys(w3Colors).map(function (e, i) {
        console.log(w3Colors)
        return (
            <div key={i.toString()} style={gradientDivStyle} className={w3Colors[e]}          >

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