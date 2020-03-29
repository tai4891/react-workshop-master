import React from 'react'
import { NewForm } from '../../components/NewForm'
import styled from 'styled-components'

export const Index = () => {
  const App = styled.div`
    text-align: center;

    .App-header {
      background-color: #282c34;
      min-height: 8vh;
      display: flex;
      flex-direction: column;
      align-items: top;
      justify-content: top;
      font-size: calc(10px + 2vmin);
      color: white;
    }
  `

  let firstName = ''
  let lastName = ''
  const onChanged: React.ChangeEventHandler<HTMLInputElement> = function(e) {
    e.target.className === 'inputFirstName'
      ? (firstName = e.target.value)
      : (lastName = e.target.value)
  }

  const clickButton: React.MouseEventHandler<HTMLButtonElement> = function(e) {
    alert(`full name: ${firstName}${lastName}`)
  }

  return (
    <App>
      <header className="App-header">
        <p>Wu Lei's React demo with TypeScript.</p>
      </header>
      <body>
        <div>
          <h2>Personal Info</h2>
          <NewForm onChanged={onChanged} clickButton={clickButton} />
        </div>
      </body>
    </App>
  )
}
