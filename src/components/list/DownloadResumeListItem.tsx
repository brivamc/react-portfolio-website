import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { FiDownload } from "react-icons/fi";

import MyResume from "../../assets/documents/bmccausland-resume-for-site.pdf";

const RESUME_NAME = "bree-mccausland-resume.pdf";

export const DownloadResumeListItem: React.FC = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.download = RESUME_NAME;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    link.href = MyResume;
    link.click();
  };

  return (
    <ListItem>
      <ListItemButton aria-label="download resume" onClick={handleClick}>
        <ListItemIcon>
          <FiDownload />
        </ListItemIcon>
        <ListItemText primary="Download Resume" />
      </ListItemButton>
    </ListItem>
  );
};
