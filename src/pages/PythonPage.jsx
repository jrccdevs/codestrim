import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {
  AppBar,Toolbar,Typography,Box,Drawer,List,ListItem,ListItemButton,
  ListItemIcon,ListItemText,IconButton,CssBaseline,Divider,useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DarkModeToggle from '../components/DarkModeToggle'
import { lessonsPython } from '../data/index.js';
import DynamicBanner from '../components/CursoPython/DynamicBanner';
import LessonContent from '../components/CursoJavascript/LessonContent';

const drawerWidth = 240;

function PythonPage() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [drawerOpen, setDrawerOpen] = useState(true);         // Escritorio
  const [mobileOpen, setMobileOpen] = useState(false);        // Móvil
  const [selectedLesson, setSelectedLesson] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (lessonsPython.length > 0 && !selectedLesson) {
      setSelectedLesson(lessonsPython[0]);
    }
  }, [selectedLesson]);

  const toggleDrawer = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

  const handleLessonSelect = (lessonId) => {
    const lesson = lessonsPython.find(l => l.id === lessonId);
    setSelectedLesson(lesson);
    if (isMobile) setMobileOpen(false);
  };

  const drawerContent = (
    <Box sx={{ height: '100%' }} className={`${darkMode ? 'header-dark' : ''}`}>
      <Toolbar sx={{ justifyContent: 'flex-end', px: 1 }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {lessonsPython.map((lesson) => (
          <ListItem
            key={lesson.id}
            disablePadding
            sx={{
              backgroundColor: selectedLesson?.id === lesson.id ? 'rgb(33, 69, 110)' : 'transparent',
            }}
          >
            <ListItemButton onClick={() => handleLessonSelect(lesson.id)}>
             
              <ListItemText primary={lesson.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className={`${darkMode ? 'header-dark' : ''}`}>
      <CssBaseline />
      <AppBar 
        style={{backgroundColor:'rgb(33, 69, 110)'}}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: isMobile
            ? '100%'
            : `calc(100% - ${drawerOpen ? drawerWidth : 0}px)`,
          ml: isMobile ? 0 : `${drawerOpen ? drawerWidth : 0}px`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <Toolbar className={`${darkMode ? 'header-dark' : ''}`}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to = "/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" noWrap >
            Ais
          </Typography>
          </Link>
            <Box sx={{ flexGrow: 1 }} />
          <DarkModeToggle darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        </Toolbar>
      </AppBar>

      {/* Drawer Escritorio visible solo si drawerOpen */}
      {!isMobile && drawerOpen && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Drawer Móvil */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          width: '100%',
        }}
      >
        <DynamicBanner darkMode={darkMode}/>
        <LessonContent lesson={selectedLesson} darkMode={darkMode}/>
      </Box>
    </Box>
  );
}

export default PythonPage;
