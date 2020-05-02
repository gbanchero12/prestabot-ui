import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";
import StorageIcon from '@material-ui/icons/Storage';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const iconSize = 30;

const features = [
  {
    color: "#304FFE",
    headline: "Respuestas inmediatas",
    text:
      "BotsUruguay se encarga de crear respuestas con algoritmos de tecnología artificial, rápidas y eficientes según los requerimientos de nuestros clientes.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Mejora tus colocaciones",
    text:
    "Con BotsUruguay podrás cubrir la demanda de tus clientes. Estando disponible 24/7 todos los días del año, mejorando tus colocaciones en pocas semanas.",
    icon: <EqualizerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#00C853",
    headline: "Integraciones",
    text:
      "Tenemos integración con Whatsapp, puedes obtener tu numero personalizado y el bot se encarga de responder por vos. Consulta por integración con Facebook, mensajes SMS, entre otros.",
    icon: <WhatsAppIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Acceso a tus datos en tiempo real",
    text:
      "La información se almacena en una base que podrás consultar en tiempo real, desde un administrador. ",
    icon: <StorageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Productividad",
    text:
      "BotsUruguay es capaz de dar respuestas cognitivas certeras, mejorando la producción del equipo de trabajo.",
    icon: <TrendingUpIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Precios",
    text:
      "Somos una software factory especializada en la creación de bots customizados, por lo que manejamos los precios mas competitivos del mercado.",
    icon: <AttachMoneyIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#C51162",
    headline: "Soporte",
    text:
    "En BotsUruguay estamos atentos a las solicitudes de nuestros clientes las 24 horas del día. ",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#DD2C00",
    headline: "Desarrollo personalizado",
    text:
      "Consulta por desarrollo personalizado para integrarnos a tu sistema de información.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },

];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          ¿ Por qué trabajar con nosotros ?
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
