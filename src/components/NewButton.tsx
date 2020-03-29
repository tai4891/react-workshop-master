import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Prop {
  clickButton: React.MouseEventHandler<HTMLButtonElement>
}

export const NewButton: FunctionComponent<Prop> = ({ clickButton }) => {
  const Wrapper = styled.div`
    button {
      width: 60px;
      height: 25px;
    }
  `

  return (
    <Wrapper>
      <button onClick={clickButton}>submit</button>
    </Wrapper>
  )
}
