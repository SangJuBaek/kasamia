import React from 'react'
import { LayoutProps } from 'types'

const BaseLayout = (props: LayoutProps) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default BaseLayout
