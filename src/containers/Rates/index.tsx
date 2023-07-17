import { styled } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { Rate } from 'types'
import {
  useGetRatesQuery,
} from 'redux/services/rates'
import RatesTable from './Table'

const Progress = styled(CircularProgress)`
  align-self: center;
`

const RatesListPage = () => {
  const { data: rates, isLoading } = useGetRatesQuery()

  if (isLoading) {
    return <Progress />
  }

  return (
    <RatesTable
      rates={rates as Rate[]}
    />
  )
}

export default RatesListPage
