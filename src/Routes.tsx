import { Routes, Route } from 'react-router-dom'

import Rates from './containers/Rates'

const Routing = () => (
  <Routes>
    <Route index element={<Rates />} />
  </Routes>
)

export default Routing
