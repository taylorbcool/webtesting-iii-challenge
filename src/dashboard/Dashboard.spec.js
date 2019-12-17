import React from 'react'
import { render }  from '@testing-library/react'
import Dashboard from './Dashboard';

// Test away

test('Dashboard shows Display', ()=>{
    const { getAllByText } = render(<Dashboard />);
    getAllByText(/open/i)
})

test('Dashboard shows Controls', ()=>{
    const { getAllByText } = render(<Dashboard />);
    getAllByText(/gate/i)
})