import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  logo: {
    height: 45,
    [theme.breakpoints.between("xs", "sm")]: {
      padding: 5,
    },
  },
}));
export default function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  const links = [
    {
      text: "Kurumsal",
      ref: "kurumsal",
      links: [
        {
          text: "Biz Kimiz?",
          to: "/biz-kimiz",
        },
        {
          text: "Ofisimiz",
          to: "/ofisimiz",
        },
        {
          text: "Sertifikalar",
          to: "/sertifikalar",
        },
        {
          text: "Referanslar",
          to: "/referanslar",
        },
      ],
    },
    {
      text: "Hizmetlerimiz",
      ref: "hizmetlerimiz",
      links: [
        {
          text: "e-Dönüşüm",
          to: "/e-donusum",
        },
        {
          text: "Bulut ERP",
          to: "/bulut-erp",
        },
        {
          text: "Okul Yönetim Sistemi",
          to: "/okul-yonetim-sistemi",
        },
        {
          text: "CRM-Müşteri İlişkileri",
          to: "/crm-musteri-iliskileri",
        },
        {
          text: "e-İmza",
          to: "/e-imza",
        },
      ],
    },

    {
      text: "Portallar",
      ref: "portallar",
      links: [
        {
          external: true,
          text: "Kullanıcı Portalı",
          to: "https://efatura.java.com.tr",
        },
        {
          external: true,
          text: "Bayi Portalı",
          to: "https://erp.java.com.tr",
        },
      ],
    },
  ];

  const [menus, setMenus] = React.useState({
    kurumsal: null,
    hizmetlerimiz: null,
    portallar: null,
  });

  const handleClick = (event, menu) => {
    setMenus({
      ...menus,
      [menu]: event.currentTarget,
    });
  };
  console.log(menus);

  const handleClose = (menu) => {
    setMenus({
      ...menus,
      [menu]: null,
    });
  };

  let setMenu = (start) => {
    return links.slice(start, start + 1).map((list, i) => (
      <div key={i}>
        <Button onClick={(e) => handleClick(e, list.ref)} fullWidth>
          {list.text}
        </Button>
        <Menu
          id={list.ref}
          anchorEl={menus[list.ref]}
          open={Boolean(menus[list.ref])}
          onClose={(e) => handleClose(list.ref)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {list.links.map((link, i) => (
            <MenuItem key={i} onClick={() => handleClose(list.ref)}>
              {link.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    ));
  };
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };
  return (
    <AppBar position="sticky" color="inherit">
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <div style={{ display: "flex", padding: 10 }}>
              <img
                src={"images/logo.png"}
                className={classes.logo}
                alt="Java Yazılım Logo"
              />
            </div>
            {isMobile ? (
              <React.Fragment key={"right"}>
                <Button onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </Button>
                <Drawer
                  anchor={"right"}
                  open={drawer}
                  onClose={toggleDrawer(false)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: 10,
                      width: 200,
                    }}
                  >
                    <Button variant="text" color="default">
                      Anasayfa
                    </Button>
                    {setMenu(0)}
                    {setMenu(1)}
                    {setMenu(2)}
                  </div>
                </Drawer>
              </React.Fragment>
            ) : (
              <div style={{ display: "flex", padding: 10 }}>
                <Button variant="text" color="default">
                  Anasayfa
                </Button>
                {setMenu(0)}
                {setMenu(1)}
                {setMenu(2)}
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
