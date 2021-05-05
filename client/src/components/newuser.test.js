import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import NewUser from './NewUser';

// describe ('NewUser', () => {
//   let container;
//   beforeEach(() => {
//     container = render(<NewUser/>);
//   })
//   it
// })
describe('<NewUser/>', () => {
    let container;
    beforeEach(() => {
    container= render(<NewUser/>);})

    it('should add a new User', () => {
        let firstname = container.getByTestId('firstname');
        let username = container.getByTestId('username');
        let surname = container.getByTestId('surname');
        let button = container.getByTestId('button')
        firstname.value = 'james'
        surname.value = 'mark'
        username.value = 'jamesmark'
        fireEvent.click(button)
        expect(username.value).toEqual('jamesmark')
        expect(firstname.value).toEqual('james')
        expect(surname.value).toEqual('mark')
      })
})
