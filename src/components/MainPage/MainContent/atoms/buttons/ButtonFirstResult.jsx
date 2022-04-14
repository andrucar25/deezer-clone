import React from 'react'

import '../../styles/mainContent.css';

export const ButtonFirstResult = ({url, className, text}) => {
  return (
    <a href={url} target='_blank'>
      <button className={`first-content-button ${className}`}>
        {text}
      </button>
    </a>
  
  )
}
