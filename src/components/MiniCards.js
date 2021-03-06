import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Imagen from "../card-example.jpg";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    height: 180
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function MiniCards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={Imagen} title="titulo" />

      <CardContent className={classes.cardContent}>
        <Typography  variant="subtitle1" gutterBottom>
          {props.titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" >
          Leer más
        </Button>
      </CardActions>
    </Card>
  );
}
