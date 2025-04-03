import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';

const components = {
  'Basic Info': <BasicInfo />,
  Work: <Work />,
  Skills: <Skills />,
  Resources: <Resources />,
  'Developer Setup': <DeveloperSetup />,
};

function App() {
  const [activeSection, setActiveSection] = useState('Basic Info');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(#2c2c2c, #1c1c1c)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h3" color="white" sx={{ mb: 4 }}>
        Rakshita's Portfolio TV 📺
      </Typography>

      {/* Antenna */}
      <Box
        sx={{
          width: 100,
          height: 50,
          borderBottom: '5px solid silver',
          position: 'relative',
          marginBottom: '-20px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 2,
            height: 40,
            backgroundColor: 'silver',
            top: -30,
            left: '25%',
            transform: 'rotate(-30deg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 2,
            height: 40,
            backgroundColor: 'silver',
            top: -30,
            right: '25%',
            transform: 'rotate(30deg)',
          }}
        />
      </Box>

      {/* TV + Remote Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* TV Frame */}
        <Box
          sx={{
            width: { xs: 320, sm: 420, md: 600 },
            height: { xs: 240, sm: 320, md: 400 },
            borderRadius: '30px',
            backgroundColor: '#000',
            padding: 2,
            border: '14px solid #4B3621',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* TV Screen */}
          <Box
            sx={{
              width: '95%',
              height: '90%',
              backgroundColor: '#111',
              borderRadius: '20px',
              color: 'white',
              padding: 2,
              overflowY: 'auto',
              boxShadow: 'inset 0 0 20px rgba(0, 255, 0, 0.15)',
              fontFamily: 'monospace',
              scrollbarColor: '#ff9800 #111',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ff9800',
                borderRadius: '10px',
              },
            }}
          >
            {components[activeSection]}
          </Box>
        </Box>

        {/* Remote Control */}
        <Box
          sx={{
            backgroundColor: '#444',
            borderRadius: '20px',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <Typography variant="h6" color="white" gutterBottom>
            Remote
          </Typography>
          <Stack spacing={1}>
            {Object.keys(components).map((section) => (
              <Button
                key={section}
                variant={activeSection === section ? 'contained' : 'outlined'}
                color="warning"
                onClick={() => setActiveSection(section)}
              >
                {section}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
