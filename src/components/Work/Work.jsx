import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export default function Work() {
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
        <Typography variant="h5">Work & Learning Journey</Typography>

        <Typography sx={{ mt: 2 }}>
          <strong>Assignments Completed:</strong>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React-based Portfolio" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Component Library using Storybook" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker containerization" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Version Control using Git and GitHub" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Testing Fundamentals" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          <strong>Technologies Learned:</strong>
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="JavaScript, React" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Storybook for component documentation" />
          </ListItem>
          <ListItem>
            <ListItemText primary="GitHub for source control and collaboration" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Docker for deployment" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Basic Testing techniques and tools" />
          </ListItem>
          <ListItem>
            <ListItemText primary="CI/CD concepts for smooth delivery" />
          </ListItem>
        </List>

        <Typography sx={{ mt: 2 }}>
          <strong>Insights from “The Unicorn Project”:</strong>
        </Typography>
        <Typography variant="body2">
          This book inspired me to think like a modern developer: focus on flow,
          developer productivity, system understanding, and continuous delivery.
          It emphasized the importance of building platforms that empower
          developers, and not just writing code.
        </Typography>
      </CardContent>
    </Card>
  );
}
