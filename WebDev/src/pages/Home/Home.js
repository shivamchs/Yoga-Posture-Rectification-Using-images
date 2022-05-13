import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>Yoga-Posture-Rectification</h1>
                {/* <Link to='/about'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        About
                    </button>
                </Link> */}
            </div>

            <h1 className="description">"Your AI Yoga Assistant"</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Modules</button>
                    </Link>
                    
                </div>
                <div className="btn-section1">
                    <Link to='/start1'>
                        <button
                            className="btn start-btn1"
                        >Start Practice</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
