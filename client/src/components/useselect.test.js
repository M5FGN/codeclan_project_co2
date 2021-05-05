import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import UserSelect from './UserSelect'


describe('<UserSelect/>', () => {
  let container;
  beforeEach(() => {
    const users = [{username: 'jim'}, {username: "steven"}]
    container= render(<UserSelect users = {users}/>)
  })
  it('should select a user', () => {
    let button = container.getByTestId(0)
    let list = container.getByTestId('userList')
    // button.value = "jim"
    fireEvent.click(list)
    fireEvent.click(button)
    expect(button).toHaveTextContent('jim')
  })
})