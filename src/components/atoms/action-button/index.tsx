import React, { ReactNode } from 'react'

import * as S from './styled'

type ParamTypes = {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ActionButton = ({ children, onClick }: ParamTypes): JSX.Element => {
  return <S.Button onClick={onClick}>{children}</S.Button>
}

export default ActionButton
