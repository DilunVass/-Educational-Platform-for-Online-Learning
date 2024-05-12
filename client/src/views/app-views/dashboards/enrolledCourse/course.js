import React, { useState, useEffect } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Collapse,
    Toolbar,
    Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useSelector } from "react-redux";
import { Checkbox } from "antd";
import { ChildCare } from "@mui/icons-material";

const drawerWidth = 250;

function Sidebar({ onContentChange }) {
    const { currentTheme } = useSelector((state) => state.theme);
    const [open, setOpen] = useState({}); // State to handle multiple collapses
    // const [sections, setSections] = useState([]);

    const handleToggle = (section) => {
        setOpen((prev) => ({ ...prev, [section]: !prev[section] })); // Toggle specific section
    };

    // const sections = [
    //     {
    //         id: "inbox",
    //         label: "Inbox",
    //         children: ["Primary", "Social", "Promotions"],
    //     },
    //     {
    //         id: "starred",
    //         label: "Starred",
    //         children: ["Important", "Follow Up"],
    //     },
    //     {
    //         id: "sendEmail",
    //         label: "Send email",
    //         children: ["Drafts", "Outbox"],
    //     },
    //     { id: "drafts", label: "Drafts", children: ["Saved", "Archived"] },
    // ];

    const sections = [
      {
          label: "Introduction",
          children: [
            {
              key: "Part 1",
              content: "This is the introduction of javascript scripting language."
            },
            {
              key: "Part 2",
              content: "https://source.unsplash.com/random"
            },
            {
              key: "Part 3",
              content: "https://www.youtube.com/embed/0u0UFWrUDss"
            },
          ]
      },
      {
        label: "Strings and Arrays",
        children: [
          {
            key: "Part 1",
            content: "How to use arrys and strings efficiently to build algorithms."
          },
          {
            key: "Part 2",
            content: "https://source.unsplash.com/random"
          },
          {
            key: "Part 3",
            content: "https://www.youtube.com/embed/y9NuAuosGJ0"
          },
        ]
    },
    {
      label: "Exception Handling",
      children: [
        {
          key: "Part 1",
          content: "Handle run time exceptions efficiently wthout breaking the flow."
        },
        {
          key: "Part 2",
          content: "https://source.unsplash.com/random"
        },
        {
          key: "Part 3",
          content: "https://www.youtube.com/embed/PGZlPzTWPKU"
        },
      ]
  },
      // {
      //   label: "Introduction",
      //   children: {
      //     "Part 1" : "This is the introduction of javascript scripting language.",
      //     "Part 2" : "https://source.unsplash.com/random", 
      //     "Part 3" : "https://www.youtube.com/embed/0u0UFWrUDss",  
      //   }
      // },
      // {
      //   label: "Introduction",
      //   children: {
      //     "Part 1" : "This is the introduction of javascript scripting language.",
      //     "Part 2" : "https://source.unsplash.com/random", 
      //     "Part 3" : "https://www.youtube.com/embed/0u0UFWrUDss",  
      //   }
      // },
  ];

    const handleContentClick = (content) => {
        onContentChange(content);
    };

    // useEffect(() => {
    //   axios.get(`http://localhost:8089/api/contents/course123`)
    //     .then(res => {
    //       console.log(res);
    //       const transformedSections = res.data.map(item => {
    //         const children = [];
    //         let counter = 1;

    //         if (item.textContent && item.textContent.length > 0) {
    //           children.push("part " + counter);
    //           counter++;
    //         }
    //         if (item.videoUrls && item.videoUrls.length > 0) {
    //           children.push("part " + counter);
    //           counter++;
    //         }
    //         if (item.images && item.images.length > 0) {
    //           children.push("part " + counter);
    //         }

    //         return {
    //           id: item._id,
    //           label: item.title,
    //           children: children
    //         };
    //       });
    //       setSections(transformedSections);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }, []);

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
            // className="enrolled-course-sidebar"
            className={
                currentTheme === "dark" ? "enrolled-course-sidebar-dark" : ""
            }
        >
            <Toolbar />
            <Divider />
            <List>
                {sections.map((section, index) => (
                    <React.Fragment key={section.id}>
                        <ListItemButton
                            onClick={() => handleToggle(index)}
                        >
                            {/* <ListItemIcon>
                                {section.id === 'inbox' ? <InboxIcon /> : <MailIcon />}
                              </ListItemIcon> */}
                            <Checkbox className="mr-2"/>
                            <ListItemText primary={section.label} />
                            {open[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse
                            in={open[index]}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {section.children.map((child, indexChild) => (
                                    <ListItemButton
                                        key={indexChild}
                                        sx={{ pl: 4 }}
                                        onClick={() =>
                                            handleContentClick(child)
                                        }
                                    >
                                        <ListItemText primary={child.key} />
                                        <Checkbox />
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
