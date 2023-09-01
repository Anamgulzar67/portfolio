import React from 'react'

function Button({ text, handleClick=null }) {
  return (
    <button
      onClick={(e) => {
        if(handleClick){
          e.preventDefault();
          handleClick();
        }
      }}
      className={"bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-9 py-3 rounded-md capitalize font-bold hover:underline hover:opacity-90"}
    >
        {text}
    </button>
  )
}

export default Button