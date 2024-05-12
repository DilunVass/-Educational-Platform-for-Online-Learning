import React, { useState } from 'react';
import { CssBaseline, Box, AppBar, Toolbar, Typography } from '@mui/material';
import Sidebar from './course';
import MainContent from './mainContent';


const drawerWidth = 240;

function CourseView() {
    const [selectedContent, setSelectedContent] = useState(null);

    const handleContentChange = (content) => {
      setSelectedContent(content);
    };
  return (
  
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Application Title
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Sidebar onContentChange={handleContentChange} />
      <MainContent selectedContent={selectedContent} />
    </Box>

  );
}

export default CourseView;
