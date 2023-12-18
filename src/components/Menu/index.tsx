import React from 'react'

import useTheme from 'hooks/useTheme'
import Navbar from './Navbar'

const Menu = ({ value }) => {
  const { isDark, toggleTheme } = useTheme()

  const { onScreen, setOnScreen } = value

  return (
    <Navbar value={{ isDark, toggleTheme, setOnScreen, onScreen }} {...value} />
  )
}

export default Menu
