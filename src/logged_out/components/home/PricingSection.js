import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Precios
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Business"
              pricing={
                <span>
                  USD 590
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Hasta 10.000 interacciones por mes", "Soporte 24/7", "Acceso a tus datos en tiempo real"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              highlighted
              title="WhatsApp Premium"
              pricing={
                <span>
                  USD 1490
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Hasta 10.000 interacciones por mes", "Soporte 24/7", "Acceso a tus datos en tiempo real", "Integracion con Whatsapp"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={12}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Tycoon"
              pricing={
                <span>
                  Desde USD 1990
                  <Typography display="inline"> / month</Typography>
                </span>
              }
              features={["Hasta 10.000 interacciones por mes"
              , "Soporte 24/7", "Acceso a tus datos en tiempo real"
            ,"Integracion con sistema de la empresa","Presupuesto sujeto a requerimientos de negocio",]}
            />
          </Grid>
          
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
