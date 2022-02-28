import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 2  }}>
      <Tabs value={value} onChange={handleChange} centered sx={{ height: '50px',}}>
        <Tab label="Menu"/>
        <Tab label="Platillos" />
        <Tab label="Contacto" />
      </Tabs>
      <Divider />
    </Box>
  );
}
