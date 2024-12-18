import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CustomCard (props) {
    const {component: Component} = props
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        < Component state={props.state} setState={props.setState}/>
      </CardActions>
    </Card>
  );
}
