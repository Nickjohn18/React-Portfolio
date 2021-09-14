import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Work.css";
import Workout from "./Workoutproject.png";
import DealSella from "./Dealsella.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Work() {
  const classes = useStyles();
  return (
    <div>
      <div class="title">
        <h1>My Work</h1>
      </div>
      <div class="container">
        <div class="projects">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={Workout}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  FullStack WorkOut
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  FullStack Workouts is a full stack website created mainly with
                  the use of node.js, express, Mysql, and handlebars. The
                  purpose of this web is to provide a simple and easier way for
                  registered users to plan and keep track of their workouts
                  throughout the month. It can keep track and graph your
                  progression throughout the month and serve as a mental
                  motivator to users.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                GitHub
              </Button>
            </CardActions>
          </Card>
          {/* 2nd */}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={DealSella}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  DealSella
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  DealSella is the app for finding the best prices for games.
                  There are two dropdown lists for genre and platform selection.
                  Once the options are selected and "Search Games" button is
                  clicked, a list of games on sale will be displayed. More
                  details and prices from different stores will be shown by
                  clicking on a game from the list.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                GITHUB
              </Button>
            </CardActions>
          </Card>
          {/* 3rd */}
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
