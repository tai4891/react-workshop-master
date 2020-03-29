import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Prop {
  className: string
  onChanged: React.ChangeEventHandler<HTMLInputElement>
}

export const NewInput: FunctionComponent<Prop> = ({ className, onChanged }) => {
  const Wrapper = styled.div`
    input {
      width: 180px;
      height: 15px;
      margin-top: 10px;
    }
  `

  return (
    <Wrapper>
      <input className={className} onChange={onChanged} />
    </Wrapper>
  )
}
