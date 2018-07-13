import React from 'react'
import { TouchableOpacity } from 'react-native'

export default (props) => (
  <TouchableOpacity key={props._key} activeOpacity={0.9} {...props} >
    {props.children}
  </TouchableOpacity>
)
