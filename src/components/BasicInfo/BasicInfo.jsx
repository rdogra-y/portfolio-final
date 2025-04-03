import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import rakshitaImg from '../../assets/rakshita.png'; // ✅ Adjust the path if needed

export default function BasicInfo() {
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
        <Typography variant="h4" gutterBottom>
          Basic Information
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={rakshitaImg}
            alt="Rakshita Dogra Profile Pic"
            sx={{
              width: 150,
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />

          {/* Text Info */}
          <Box>
            <Typography>
              <strong>Name:</strong> Rakshita Dogra
            </Typography>
            <Typography>
              <strong>Email:</strong> rakshitadogra@gmail.com
            </Typography>
            <Typography>
              <strong>Location:</strong> Chandigarh, India
            </Typography>
            <Typography>
              <strong>Program:</strong> Full Stack Web Development
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
