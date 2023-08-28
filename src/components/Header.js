import React from 'react'
import {PropTypes} from 'prop-types'
import Button from './Button.js'

const Header = ({onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1 style={headingStyles}>RBSL TO-DO-APP</h1>
      <Button text={showAdd ? 'Close':'Add'} color={showAdd ? 'red':'green'} clickEvent={onAdd}/>
      {/* <Button text='Delete Task' color='red'/>
      <Button text='Edit Task'/> */}
    </header>
  )
}

const headingStyles = {
  textAlign: 'center', 
  backgroundColor: 'yellow', 
  color: 'blue'
}
export default Header