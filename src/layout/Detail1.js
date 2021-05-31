import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Detail1() {
  return (
    <Grid
      container
      justify="center"
      style={{ padding: "1em", marginTop: "2em" }}
    >
      <Grid item xs={12} md={8}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <img
              src={"images/img1.jpg"}
              style={{ width: "100%" }}
              alt="Neden Java?"
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "1em" }}>
            <Grid container direction="column">
              <Typography
                variant="h4"
                style={{
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                NEDEN JAVA?
              </Typography>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                Tüm Yönleriyle Sorunsuz.
              </Typography>
              <Typography variant="body1">
                Türkiye’de e-Dönüşüm alanında ilk şirketlerden biri olan, dünya
                trendlerini yakından takip eden Java A.Ş., işletmelerin ihtiyaç
                duyacağı tüm e-Dönüşüm çözümlerini geliştirip, tüm muhasebe ve
                finansal süreçleriniz için hızlı ve sorunsuz çözümler sunar.
              </Typography>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                Her türden işletmeye Uygun.
              </Typography>
              <Typography variant="body1">
                Gelir İdaresi Başkanlığı’nın belirlediği standartlara uygun
                olarak geliştirilen elektronik çözümleri ile mevcut yazılımınız
                ne olursa olsun, faturalarınızın dolaşımını güvenle ve hızla
                gerçekleşmesini sağlar. Doğru ihtiyaç analizi ile işletme
                yapınıza en uygun elektronik çözümlere, Java güvencesi ve
                tecrübesi ile ulaşabilirsiniz.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
