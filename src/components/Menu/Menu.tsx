import Drawer from '@material-ui/core/Drawer'
import { Divider, IconButton } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx'
import { useStyles } from '../../styles/mainStyles'
import { mainListItems } from './litsItems'
import { List } from '@material-ui/core'

const Menu = ({ open, toggleOpenMenu }: any) => {
  const classes = useStyles()

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleOpenMenu}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
    </Drawer>
  )
}

export default Menu
