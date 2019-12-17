// Test away!
import React from 'react'
import { render, fireEvent }  from '@testing-library/react'
import { toBeDisabled } from '@testing-library/jest-dom'
expect.extend({ toBeDisabled })
import Controls from './Controls'


test('Provide buttons to toggle the closed and locked states', ()=>{
    const { getByText } = render(<Controls locked={true} closed={true}/>)
    getByText(/unlock/i)
    getByText(/open/i)
})

test('Buttons text changes to reflect the state the door will be in if clicked', ()=>{
    const { getByText } = render(<Controls locked={true} closed={true}/>);
    const button = getByText(/unlock/i);
    fireEvent.click(button);
    getByText(/lock/i)
})

test('The open button is disabled if the gate is locked', ()=>{
    const { getByText } = render(<Controls locked={true} closed={true}/>)
    const button = getByText(/open/i)
    expect(button).toBeDisabled()
})

test('The locked toggle button is disabled if the gate is open', ()=>{
    const { getByText } = render(<Controls locked={false} closed={false}/>)
    const button = getByText(/lock/i)
    expect(button).toBeDisabled()
})