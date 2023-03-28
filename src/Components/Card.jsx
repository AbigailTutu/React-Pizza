import React from 'react'

const Card = ({ imgSrc, title, description}) => {
  return (
    <div className="col-md-3">
    <div className="thumbnail">
      <img src= {imgSrc}/>
      <div className="caption">
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card
