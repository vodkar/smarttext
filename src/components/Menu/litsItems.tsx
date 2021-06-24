import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SearchIcon from '@material-ui/icons/Search'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import { Link } from 'react-router-dom'

export const mainListItems = (
  <>
    <Link to="text_editor">
      <ListItem button>
        <ListItemIcon>
          <TextFieldsIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="parser">
      <ListItem button>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
  </>
)
