import React from "react";
import { Parallax } from "react-parallax";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Slider() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isDesktop = useMediaQuery("(max-width:1280px)");
  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
  };
  return (
    <Parallax
      bgImage={"images/slider.jpg"}
      bgImageStyle={{ top: !isDesktop ? "-50%" : "0" }}
    >
      <div style={{ height: 600, backgroundColor: "rgba(0,0,0, 0.45)" }}>
        <div style={insideStyles}>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                wrap="nowrap"
              >
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  style={{
                    color: "white",
                    marginBottom: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Java İle e-Dönüşüm Zamanı
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    color: "white",

                    textAlign: "center",
                  }}
                >
                  e-Fatura, e-Arşiv, e-Defter, e-İrsaliye, e-SMM, e-MM, e-Bilet,
                  e-Saklama, ERP, KVKK Süreçleri, JAVA A.Ş. İle Çok daha hızlı
                  ve rahat olacak. Katalog Temini ve süreçler için lütfen mail
                  veya Whatsapp ile irtibat kurunuz
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Parallax>
  );
}
