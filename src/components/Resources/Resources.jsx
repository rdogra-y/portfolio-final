import React from 'react';
import { Card, CardContent, Typography, Link, Box } from '@mui/material';
import resourceImg from '../../assets/react-resource.png'; // ✅ adjust if needed

export default function Resources() {
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
        <Typography variant="h5" gutterBottom>
          Resources
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Image */}
          <Box
            component="img"
            src={resourceImg}
            alt="React Portfolio Resource"
            sx={{ width: '100%', borderRadius: 2, boxShadow: 2 }}
          />

          {/* Links */}
          <Typography>
            <strong>Portfolio Tutorial:</strong>{' '}
            <Link
              href="https://www.freecodecamp.org/news/build-portfolio-website-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeCodeCamp Article
            </Link>
          </Typography>

          <Typography>
            <strong>Inspiration Article:</strong>{' '}
            <Link
              href="https://dev.to/codebucks/build-a-stunning-portfolio-with-react-js-p1"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeBucks on DEV.to
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
