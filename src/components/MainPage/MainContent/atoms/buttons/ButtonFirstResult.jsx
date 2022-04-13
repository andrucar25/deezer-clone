import React from 'react'

import '../../styles/mainContent.css';

export const ButtonFirstResult = ({className, text}) => {
  return (
    <button className={`first-content-button ${className}`}>
        {text}
    </button>
  )
}
