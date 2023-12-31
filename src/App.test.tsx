import { render } from '@testing-library/react'

import App from './App'

jest.mock('./Routes', () => () => 'Routes')

it('renders correctly', () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})
