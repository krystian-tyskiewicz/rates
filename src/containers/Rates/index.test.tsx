import { render } from '@testing-library/react'

import Rates from '.'
import { rates as mockRates } from 'utils/mocks'
import { Rate } from 'types'

jest.mock('redux/services/rates', () => ({
  useGetRatesQuery: jest.fn().mockImplementation(() => ({
    data: mockRates,
  })),
}))

jest.mock('./Table', () => {
  const Table = (rates: Rate[]) => (
    <div className="table">{JSON.stringify(rates)}</div>
  )
  return Table
})

it('renders correctly', () => {
  const { container } = render(<Rates />)
  expect(container).toMatchSnapshot()
})
