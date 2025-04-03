import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function Skills() {
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
        <Typography variant="h5">Skills</Typography>
        <Typography>
          <strong>Languages/Frameworks:</strong> JavaScript, React, Node.js,
          HTML, CSS, Java
        </Typography>
        <Typography>
          <strong>Tools:</strong> Git, GitHub, Docker, VS Code, Storybook,
          Postman
        </Typography>
      </CardContent>
    </Card>
  );
}
