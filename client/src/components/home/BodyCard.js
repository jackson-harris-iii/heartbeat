import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Grid from "@material-ui/core/Grid";
import GraphCard from "./GraphCard";
import MapCard from "./MapCard";
import ViewCard from "./ViewCard";
import DescriptionCard from "./DescriptionCard";

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function BodyCard(props) {
  const { classes } = props;

  // state = {
  //   direction: "row",
  //   justify: "center",
  //   alignItems: "center",
  // };
  // const bull = <span className={classes.bullet}>•</span>;
  // const { alignItems, direction, justify } = this.state;
  return (
    <div>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <DescriptionCard />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <MapCard />
              </Grid>
              <Grid item xs={6}>
                <ViewCard />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <GraphCard />
            </Grid>
          </CardContent>
          {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </Grid>
    </div>
  );
}

BodyCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyCard);
