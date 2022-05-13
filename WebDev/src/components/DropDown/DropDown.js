import React from 'react'

import { poseImages } from '../../utils/pose_images'

import './DropDown.css'

const CLASS_NO = {
    Chair: 0,
    Cobra: 1,
    Dog: 2,
    Shoulderstand: 4,
    Traingle: 5,
    Tree: 6,
    Warrior: 7,
  }

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
return (
        <div
        className='dropdown dropdown-container'
         
      >
        <button 
            className="btn btn-secondary dropdown-toggle"
            type='button'
            data-bs-toggle="dropdown"
            id="pose-dropdown-btn"
            aria-expanded="false"
        >{currentPose}
        </button>
        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose) => (
                <li onClick={() => setCurrentPose(pose)}>
                    <div class="dropdown-item-container">
                        <p className="dropdown-item-1">{pose}</p>
                        <img 
                            src={poseImages[CLASS_NO[pose]]}
                            className="dropdown-img"
                        />
                        
                    </div>
                </li>
            ))}
            
        </ul>
              
          
      </div>
    )
}
 