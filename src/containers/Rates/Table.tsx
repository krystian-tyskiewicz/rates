import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Rate } from 'types'

type Props = {
  rates: Rate[]
}

const RatesTable = ({ rates }: Props) => {
  return (
    <Paper sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Mid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rates.map((rate) => (
            <TableRow key={rate.code}>
              <TableCell>{rate.currency}</TableCell>
              <TableCell>{rate.code}</TableCell>
              <TableCell>{rate.mid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default RatesTable
