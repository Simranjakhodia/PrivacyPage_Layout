import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
function Content() {
  return (
    <div className = 'content'>
        <List>
            <ListItem button>
                <AccountCircleIcon sx = {{fontSize: 30, marginRight: 2}}/>
                <ListItemText secondary="Account Information" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <WorkOutlineIcon sx = {{fontSize: 30, marginRight: 2}}/>
                <ListItemText secondary="Change your password" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Other Settings" />
            </ListItem>
            <ListItem button>
                <ListItemText secondary="Clear Browser History" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText secondary= 'Pause My Search' />
                <Switch defaultChecked/>
            </ListItem>
            <ListItem button divider>
                <ListItemText secondary= 'Allow Spark India to access your location' />
                <Switch />
            </ListItem>
            <ListItem button divider>
                <ListItemText secondary= 'Allow Spark India to access contact list' />
                <Switch defaultChecked/>
            </ListItem>
            <ListItem button divider>
                <ListItemText secondary= 'Allow Spark India to access microphone' />
                <Switch />
            </ListItem>
            <ListItem button>
                <ListItemText secondary= 'Allow Spark India to access camera' />
                <Switch defaultChecked/>
            </ListItem>
            </List>
    </div>
  )
}

export default Content