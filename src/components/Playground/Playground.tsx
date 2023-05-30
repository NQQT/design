import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Renderer } from '../Renderer';
import { createDataState } from 'assets';

const drawerWidth = 320;

const props = {
  id: 'ToggleButtonGroup',
  props: {
    color: 'primary',
    size: 'small',
    orientation: 'vertical',
    value: 'alignment',
    exclusive: true,
    onChange: () => {
      console.log('on changed');
    },
    'aria-label': 'Platform',
  },
  nested: [
    {
      id: 'ToggleButton',
      props: {
        value: 'web',
        children: 'Web',
      },
    },
    {
      id: 'ToggleButton',
      props: {
        color: 'secondary',
        value: 'android',
        children: 'Android',
      },
    },
    {
      id: 'ToggleButton',
      props: {
        value: 'ios',
        children: 'iOS',
      },
    },
  ],
};

const reactive = createDataState({
  props: null,
  configs: null,
});

export const PermanentDrawerRight = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Design Playground
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Renderer
          {...props}
          onSelected={({ properties, options }) => {
            console.log(properties, options);
            reactive.props = properties;
            reactive.configs = options;
          }}
        />
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        Something is here
        <Divider />
        Something else is here
      </Drawer>
    </Box>
  );
};
