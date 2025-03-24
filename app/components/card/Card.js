import React from 'react'

function Card(props) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white hover:bg-black cursor-pointer m-4">
      <img className="w-full" src={props.imgSrc} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 hover:text-white">{props.card}</div>
        <p className="text-gray-700 text-base hover:text-white">
          {props.disc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.first}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.second}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.third}
        </span>
      </div>
    </div>
  )
}

export default Card;
