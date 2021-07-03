import React, {useEffect} from 'react'
import { CssBaseline } from '@material-ui/core'
import { useStyles } from './styles/mainStyles'
import Content from './components/ContentTextEditor/Content'
import Header from './components/Header'
import Menu from './components/Menu/Menu'
import {Route, Switch, BrowserRouter as Router, HashRouter, useHistory, BrowserRouter} from 'react-router-dom'
import ParserContent from "./components/ParserContent";

function App() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  let history = useHistory();

  // useEffect(() => {
  //   history.push("/text_editor");
  // }, [history])


  const toggleOpenMenu = () => {
    setOpen(!open)
  }

  return (
      <div className={classes.root}>
        <CssBaseline />
        <Header open={open} toggleOpenMenu={toggleOpenMenu} />
        <Menu open={open} toggleOpenMenu={toggleOpenMenu} />
        <Switch>
          <Route path="/text_editor">
            <Content />
          </Route>
          <Route path="/parser">
              <ParserContent/>
          </Route>
         </Switch>
      </div>

  )
}

export default App
