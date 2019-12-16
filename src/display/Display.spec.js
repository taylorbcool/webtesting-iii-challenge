// Test away!
import React from 'react'
import { render }  from '@testing-library/react'
import { toHaveClass } from '@testing-library/jest-dom'
expect.extend({ toHaveClass})
import Display from './Display'

test("Defaults to unlocked and open", ()=>{
    const locked = false
    const closed = false
    const tree = render(
        <Display locked={locked} closed={closed} />
    )

    expect(tree).toMatchSnapshot()
})

test('Displays gate open/closed and locked/unlocked', ()=>{
    const { getByText, rerender } = render(<Display locked={true} closed={true} />);
    getByText(/closed/i);
    getByText(/locked/i);

    render(<Display locked={false} closed={false} />);
    getByText(/open/i);
    getByText(/unlocked/i);
})

test('Displays closed if closed prop is true, open if otherwise', ()=>{
    const { getByText, rerender } = render(<Display locked={true} closed={true} />);
    getByText(/closed/i);

    render(<Display locked={true} closed={false} />);
    getByText(/open/i);
})

test('Displays locked if locked prop is true, and open if otherwise', ()=>{
    const { getByText } = render(<Display locked={true} closed={true} />);
    getByText(/locked/i);

    render(<Display locked={false} closed={true} />);
    getByText(/unlocked/i);
})

test('When locked or closed use the red-led class', ()=>{
    const { getByText } = render(<Display locked={true} closed={true} />)
    const panel = getByText(/closed/i)

    expect(panel).toHaveClass('red-led')
})

test('When unlocked or open use the green-led class', ()=>{
    const { getByText } = render(<Display locked={false} closed={false} />)
    const panel = getByText(/open/i)

    expect(panel).toHaveClass('green-led')
})