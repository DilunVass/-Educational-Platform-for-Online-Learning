import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Collapse, Toolbar, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

function Sidebar() {
  const [open, setOpen] = useState({});  // State to handle multiple collapses

  const handleToggle = (section) => {
    setOpen(prev => ({ ...prev, [section]: !prev[section] }));  // Toggle specific section
  };

  const sections = [
    { id: 'inbox', label: 'Inbox', children: ['Primary', 'Social', 'Promotions'] },
    { id: 'starred', label: 'Starred', children: ['Important', 'Follow Up'] },
    { id: 'sendEmail', label: 'Send email', children: ['Drafts', 'Outbox'] },
    { id: 'drafts', label: 'Drafts', children: ['Saved', 'Archived'] },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {sections.map(section => (
          <React.Fragment key={section.id}>
            <ListItemButton onClick={() => handleToggle(section.id)}>
              <ListItemIcon>
                {section.id === 'inbox' ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={section.label} />
              {open[section.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[section.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {section.children.map(child => (
                  <ListItemButton key={child} sx={{ pl: 4 }}>
                    <ListItemText primary={child} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
