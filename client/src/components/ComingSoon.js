import React from 'react'

import construction from '../images/construction.svg';

import '../styles/styles.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <h1>Coming soon!</h1>
      <img src={construction} />
    </div>
  )
}

export default ComingSoon;