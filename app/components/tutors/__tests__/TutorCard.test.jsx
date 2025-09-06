import { render, screen } from '@testing-library/react'
import TutorCard from '../TutorCard'

const mockTutor = {
  id: 1,
  name: 'Dr. John Doe',
  subject: 'Mathematics',
  price: 50,
  rating: 4.8,
  verified: true,
  avatar: 'https://example.com/avatar.jpg',
  lessons: 100
}

describe('TutorCard Component', () => {
  it('renders tutor information correctly', () => {
    render(<TutorCard tutor={mockTutor} index={0} />)
    
    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument()
    expect(screen.getByText('Mathematics')).toBeInTheDocument()
    expect(screen.getByText('$50/hr')).toBeInTheDocument()
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('(100+ lessons)')).toBeInTheDocument()
  })

  it('shows verified badge when tutor is verified', () => {
    render(<TutorCard tutor={mockTutor} index={0} />)
    
    const verifiedIcon = screen.getByTitle('Verified Tutor')
    expect(verifiedIcon).toBeInTheDocument()
  })

  it('renders sponsored content when tutor is sponsored', () => {
    const sponsoredTutor = { ...mockTutor, sponsored: true, price: 'Custom' }
    render(<TutorCard tutor={sponsoredTutor} index={0} />)
    
    expect(screen.getByText('SPONSORED')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
  })

  it('renders View Profile button for regular tutors', () => {
    render(<TutorCard tutor={mockTutor} index={0} />)
    
    expect(screen.getByText('View Profile')).toBeInTheDocument()
  })

  it('renders Learn More button for sponsored tutors', () => {
    const sponsoredTutor = { ...mockTutor, sponsored: true }
    render(<TutorCard tutor={sponsoredTutor} index={0} />)
    
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
