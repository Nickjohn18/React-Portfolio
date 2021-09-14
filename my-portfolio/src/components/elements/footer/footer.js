import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./footer.css";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Github"
        href="https://github.com/Nickjohn18"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        label="Mail"
        href="mailto:nickjohndeluna21@gmail.com"
        icon={<EmailIcon />}
      />
      <BottomNavigationAction
        label="LinkedIn"
        href="https://www.linkedin.com/in/nick-john-de-luna-12930520a/"
        icon={<LinkedInIcon />}
      />
    </BottomNavigation>
  );
}
