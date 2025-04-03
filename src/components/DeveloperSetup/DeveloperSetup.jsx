import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function DeveloperSetup() {
  return (
    <Card
      sx={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5">Developer Setup</Typography>
        <Typography>
          <strong>Code Editor:</strong> VS Code
        </Typography>
        <Typography>
          <strong>Terminal:</strong> Windows PowerShell
        </Typography>
        <Typography>
          <strong>Font:</strong> Fira Code
        </Typography>
        <Typography>
          <strong>Preferred Stack:</strong> React + Node.js, Docker, GitHub,
          CI/CD
        </Typography>
      </CardContent>
    </Card>
  );
}
