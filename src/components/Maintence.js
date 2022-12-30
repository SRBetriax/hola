import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

import logoBetriax from '../img/logo.png'
import P2P from '../img/Plataforma1.png'
import "../styles/_maintence.css"
import { Link } from 'react-router-dom';


export default function Maintence(){
    return (
        <div className="maintence">
            <div className="card">
                <Link className="link-to-main" to={'/'}>
                    <img alt="logo-betriax" className="logo-betriax" src={logoBetriax}/>
                </Link>
                <h3>Página en mantenimiento...</h3>
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{ position: 'center', left: '0px', top: '0px', 'z-index': '1', 'text-align': 'center', 'justify-content':'center','margin-left': 'auto', 'margin-right': 'auto', 'height':'25%'}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor = '#1238B5'
                    barColor = '#51E5FF'
                />
            </div>
            <div className="blur"></div>
            <img alt='maintence-view' className="img-p2p" src={P2P}/>
        </div>
    )
}