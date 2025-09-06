import { render, screen } from '@testing-library/react'
import Icon from '../Icon'

describe('Icon Component', () => {
  it('renders an icon with the correct class', () => {
    render(<Icon name="fa-home" />)
    const icon = screen.getByRole('generic')
    expect(icon).toHaveClass('fas', 'fa-home')
  })

  it('applies additional className when provided', () => {
    render(<Icon name="fa-user" className="text-blue-500" />)
    const icon = screen.getByRole('generic')
    expect(icon).toHaveClass('fas', 'fa-user', 'text-blue-500')
  })

  it('renders without crashing when no props are provided', () => {
    render(<Icon />)
    const icon = screen.getByRole('generic')
    expect(icon).toBeInTheDocument()
  })
})
