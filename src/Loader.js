import { Flex, Spin } from 'antd'
import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div id="loading-indicator">
    <div class="lds-hourglass"></div>
  </div>
  )
}

export default Loader
