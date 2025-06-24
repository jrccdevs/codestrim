import React from 'react';
import { Box, Typography, Grid, Fade } from '@mui/material';
import { Link } from 'react-router-dom'

function SkillsSection({ darkMode, skills }) {
  return (
    <Box
      id="skills"
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(12px)',
        py: 8,
        px: { xs: 2, md: 6 },
        minHeight: 'auto',
      }}
    >
      

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Fade in timeout={400 + index * 200}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover .info': {
                    opacity: 1,
                    transform: 'translateY(0px)',
                  },
                }}
              >
                <Link to={skill.url}>
                  
                <Box
                  component="img"
                  src={skill.icon}
                  alt={skill.name}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: '20px',
                    borderRadius: '50%',
                    transition: 'transform 0.4s ease',
                    boxShadow: darkMode
                      ? '0 0 20px #00e5ff'
                      : '0 0 15px #1976d2',
                    '&:hover': {
                      transform: 'scale(1.2) rotate(5deg)',
                      boxShadow: darkMode
                        ? '0 0 40px #00e5ff'
                        : '0 0 25px #2196f3',
                    },
                    cursor: skill.url ? 'pointer' : 'default',
                  }}
                  
                  //onClick={() => skill.url && (window.location.href = skill.url)}
                />
                 </Link>
                 
                <Box
                  className="info"
                  sx={{
                    mt: 2,
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'all 0.4s ease',
                    color: darkMode ? '#e0f7fa' : '#1a237e',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {skill.name}
                  </Typography>
                  {/*<Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Nivel: {skill.level}%
                </Typography>*/}
                </Box>
              </Box>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsSection;
