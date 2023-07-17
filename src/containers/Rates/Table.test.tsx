import { render } from '@testing-library/react'

import Table from './Table'
import { rates } from 'utils/mocks'

it('renders correctly', () => {
  const { container } = render(<Table rates={rates} />)
  expect(container).toMatchSnapshot()
})
