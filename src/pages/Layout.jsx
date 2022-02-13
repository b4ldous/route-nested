import React, { useState } from "react";
  import { AppBar, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import HomeIcon from '@mui/icons-material/Home';



import { Link, Outlet} from "react-router-dom";

export default function DrawerComponent() {

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>

<Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/first">First</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/second">Second</Link>
            </ListItemText>
          </ListItem>
         
        </List>
      </Drawer>

      <Outlet />

      <AppBar position="fixed" color="inherit">
        <ListItem button to='/' component={Link}>
        <HomeIcon />


        </ListItem>

        

      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
      


      </AppBar>

      
      
      
      
    </>
  );
}
