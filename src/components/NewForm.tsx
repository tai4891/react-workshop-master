import React, {
  FunctionComponent,
  MouseEventHandler,
  ChangeEventHandler
} from 'react'
import { NewInput } from './NewInput'
import { NewButton } from './NewButton'

interface Props {
  clickButton: React.MouseEventHandler<HTMLButtonElement>
  onChanged: React.ChangeEventHandler<HTMLInputElement>
}

export const NewForm: FunctionComponent<Props> = ({
  onChanged,
  clickButton
}) => {
  return (
    <div>
      <form className="form">
        <label>First Name:</label>
        <br />
        <NewInput onChanged={onChanged} className="inputFirstName" />
        <br />
        <label>Last Name:</label>
        <br />
        <NewInput onChanged={onChanged} className="inputLastName" />
        <br />
        <NewButton clickButton={clickButton} />
      </form>
    </div>
  )
}
