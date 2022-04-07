import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import TestApp from '../pages/testApp'

describe('testApp', () => {
  test('render testApp component', () =>{
    render(<TestApp />)
    //expect( screen.getByText('Search:') ).toBeInTheDocument()
    expect(screen.getByAltText('vercel img')).toBeInTheDocument()
  })
})