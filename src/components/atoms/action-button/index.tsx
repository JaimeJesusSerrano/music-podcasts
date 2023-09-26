import React, { ReactNode } from 'react'

type ParamTypes = {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

// background-color: gold;
// border-radius: 25px;
// cursor: pointer;
// height: 30px;
// padding-left: 12px;
// padding-right: 12px;

const ActionButton = ({ children, onClick }: ParamTypes): JSX.Element => {
  return <button onClick={onClick}>{children}</button>
}

export default ActionButton
