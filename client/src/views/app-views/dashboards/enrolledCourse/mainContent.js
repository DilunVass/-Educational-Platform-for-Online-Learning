import React from 'react';
import { Box, Toolbar, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

function MainContent({ selectedContent }) {

  const { currentTheme } = useSelector(state => state.theme);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        paddingTop: 8,
      }}
    >
      <Toolbar />
      {selectedContent && (
        <Card sx={{ maxWidth: 645, mb: 2 }} className={currentTheme === "dark" ? 'mui-card-content-dark' : 'mui-card-content-light'}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedContent}
            </Typography>
            {selectedContent === "part 1" && (
              <Typography variant="body2" color={currentTheme === "dark" ? "white" : "black"}>
                Elegant description of the content.
              </Typography>
            )}
            {selectedContent === "part 2" && (
              <img src="https://source.unsplash.com/random" alt="Random" />
            )}
            {selectedContent === "part 3" && (
              <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  src="https://www.youtube.com/embed/0u0UFWrUDss"
                  title="Course Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" className={currentTheme === "dark" ? "mui-btn-dark" : "mui-btn-light"}>
              Mark as Completed
            </Button>
          </CardActions>
        </Card>
      )}
    </Box>
  );
}

export default MainContent;
