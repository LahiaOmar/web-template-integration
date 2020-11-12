import React from 'react'

const ItemContainer = ({ title, children }) => {
  console.log("ItemContainer")
  return (
    <div className="item-container">
      <p>{title}</p>
      <div className="item-list">
        {children}
      </div>
    </div>
  )
}

export default ItemContainer