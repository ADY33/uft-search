import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import  BottomNavigation  from "@material-ui/core/BottomNavigation";
import  BottomNavigationAction  from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/core/Restore";
import  FavoriteIcon  from "@material-ui/icons/FavoriteIcon";
import LocationOnIcon from "@material-ui/core/LocationOn";

const useStyles = makeStyles({

  root: {
    width : 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
         showLabels
         className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
  );
}