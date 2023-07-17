import { createGlobalStyle } from 'styled-components'
import { styled, Typography } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Routes from './Routes'
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
  }
`

const Header = styled('header')`
  background-color: ${props => props.theme.palette.grey[300]};
  padding: 20px;
  display: flex;
  justify-content: center;
`

const Main = styled('main')`
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 20px;
`

const Content = styled('div')`
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Footer = styled('footer')`
  background-color: ${props => props.theme.palette.grey[300]};
  padding: 20px;
  display: flex;
  justify-content: center;
`

const App = () => (
  <>
    <GlobalStyle />
    <Header>
      <Typography color="primary" fontStyle="italic">
        Current exchange rates table
      </Typography>
    </Header>
    <Main>
      <Content>
        <Routes /> 
      </Content>
    </Main>
    <Footer>
      <Typography color="primary" fontStyle="italic">
        <Link to="https://api.nbp.pl/" target="_blank">https://api.nbp.pl/</Link>
      </Typography>
    </Footer>
  </>
)

export default App
