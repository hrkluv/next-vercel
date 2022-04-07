import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

describe('Rendering', () => {
  it('Shuld render Welcome text', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
  })
  it('Shuld render Get started', () => {
    render(<Home />)
    expect(screen.getByText('Get started by editing')).toBeInTheDocument()
  })
})