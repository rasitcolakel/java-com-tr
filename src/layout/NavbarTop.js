import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ButtonBase } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Link from "@material-ui/core/Link";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#333",
  },
  item: {
    padding: 5,
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  itemButton: {
    padding: "0 10px",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 5,
    },
  },
  itemText: {
    textDecoration: "none",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));
export default function NavbarTop() {
  const classes = useStyles();
  const items = [
    {
      text: "+90 532 111 52 82",
      to: "tel:+90 532 111 52 82",
      icon: <Phone className={classes.itemButton} />,
    },
    {
      text: "java@java.com.tr",
      to: "mailto:java@java.com.tr",
      icon: <MailIcon className={classes.itemButton} />,
    },
  ];
  const socialIcons = [
    {
      to: "#",
      icon: <Facebook className={classes.itemButton} />,
    },
    {
      to: "#",
      icon: <Twitter className={classes.itemButton} />,
    },
    {
      to: "#",
      icon: <Instagram className={classes.itemButton} />,
    },
    {
      to: "#",
      icon: <LinkedIn className={classes.itemButton} />,
    },
    {
      to: "whatsapp://send?abid=+905321115282&text=Merhaba, kolay gelsin",
      icon: <WhatsApp className={classes.itemButton} />,
    },
  ];
  return (
    <div className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <div style={{ display: "flex" }}>
              {" "}
              {socialIcons.map(function (item, i) {
                return (
                  <Link href={item.to} key={i}>
                    <ButtonBase className={classes.item}>
                      {item.icon}{" "}
                    </ButtonBase>
                  </Link>
                );
              })}
            </div>
            <div style={{ display: "flex" }}>
              {items.map(function (item, i) {
                return (
                  <Link href={item.to} key={i}>
                    <ButtonBase className={classes.item}>
                      {item.icon}{" "}
                      <p className={classes.itemText}>{item.text}</p>
                    </ButtonBase>
                  </Link>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
