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
import BotCard from "./BotCard"
import FotoTom from "./../../dummy_data/images/BURY.PNG"
import LogoTom from "./../../dummy_data/images/Tom.jpg"
import LogoIliana from "./../../dummy_data/images/Iliana.png"
import LogoAlberth from "./../../dummy_data/images/alberth.png"
import LogoAlexa from "./../../dummy_data/images/Alexa.jpg"
import ImagenAlexa from "./../../dummy_data/images/soporte.PNG"
import ImagenAlberth from "./../../dummy_data/images/Finanzas.PNG"
import ImagenIliana from "./../../dummy_data/images/NegociosInmobiliarios.PNG"



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



function BotsSection(props) {
  const { width, classes } = props;
    const bots = {
    Tom: {
        nombre:"Tom",
        fechaLanzamiento:"Mayo 02, 2020",
        breveDescripcion:"Habilidad: Simpatía",
        textoPrincipal:"Tom trabaja en Bots Uruguay arduamente desde mayo de 2020, se dedica"
        + " a darle la bienvenida a los clientes de BotsUruguay.com y contarle los servicios que ofrece la empresa.",
        foto:FotoTom,
        logo:LogoTom,
    },
    Alberth: {
        nombre:"Alberth",
        fechaLanzamiento:"Enero 15, 2020",
        breveDescripcion:"Habilidad: Finanzas",
        textoPrincipal:"Alberth trabaja en casas de préstamos financieros arduamente desde enero de 2020, se dedica"
        + " a darle la bienvenida a los clientes y ofrecer servicios financieros. Puede calcular valores de cuotas y realizar consultas al clearing de informes, entre otras funcionalidades.",
        foto:ImagenAlberth,
        logo:LogoAlberth,
    },
    Iliana: {
        nombre:"Iliana",
        fechaLanzamiento:"Febrero 10, 2020",
        breveDescripcion:"Habilidad: Negocios inmobiliarios",
        textoPrincipal:"Iliana existe desde febrero del 2020, sus habilidades le permiten realizar una serie de preguntas,"
        + " que permiten filtrar inmuebles en la web según los gustos y las posibilidades de los interesados."
        + " También responde preguntas frecuentes, entre otras funcionalidades.",
        foto:ImagenIliana,
        logo:LogoIliana,
    },
    Alexa: {
        nombre:"Alexa",
        fechaLanzamiento:"Marzo 20, 2020",
        breveDescripcion:"Habilidad: Gestión de soporte interno",
        textoPrincipal:"Alexa existe desde marzo del 2020, sus habilidades le permiten gestionar los tickets de soporte interno de las empresas,"
        + " se conecta con aplicaciones de las empresas permitiéndole a los empleados gestionar sus solicitudes de forma ordenada."
        + " También responde preguntas frecuentes, entre otras funcionalidades.",
        foto:ImagenAlexa,
        logo:LogoAlexa,
    },
}
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Muestras
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
            <BotCard 
            titulo={bots.Tom.nombre}
            fechaLanzamiento={bots.Tom.fechaLanzamiento}
            breveDescripcion={bots.Tom.breveDescripcion}
            textoPrincipal={bots.Tom.textoPrincipal}
            foto={bots.Tom.foto}
            logo={bots.Tom.logo}
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
           <BotCard
           titulo={bots.Iliana.nombre}
           fechaLanzamiento={bots.Iliana.fechaLanzamiento}
           breveDescripcion={bots.Iliana.breveDescripcion}
           textoPrincipal={bots.Iliana.textoPrincipal}
           foto={bots.Iliana.foto}
           logo={bots.Iliana.logo}/>
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
           <BotCard
           titulo={bots.Alberth.nombre}
           fechaLanzamiento={bots.Alberth.fechaLanzamiento}
           breveDescripcion={bots.Alberth.breveDescripcion}
           textoPrincipal={bots.Alberth.textoPrincipal}
           foto={bots.Alberth.foto}
           logo={bots.Alberth.logo}/>
          </Grid>
          
          <Grid
            item
            alignContent="center"
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
           <BotCard
           titulo={bots.Alexa.nombre}
           fechaLanzamiento={bots.Alexa.fechaLanzamiento}
           breveDescripcion={bots.Alexa.breveDescripcion}
           textoPrincipal={bots.Alexa.textoPrincipal}
           foto={bots.Alexa.foto}
           logo={bots.Alexa.logo}/>
          </Grid>
         
          
          
        </Grid>
      </div>
    </div>
  );
}

BotsSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(BotsSection)
);
