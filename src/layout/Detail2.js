import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Detail1() {
  const services = [
    {
      name: "e-Fatura",
      description:
        "Java e-Fatura ile faturalarınızı saniyeler içerisinde oluşturun.",
      icon: "images/icons/invoice.png",
    },
    {
      name: "e-Arşiv Fatura",
      description:
        "e-Arşiv ile son kullanıcılara fatura gönderme imkanı yakalayın.",
      icon: "images/icons/archive.png",
    },
    {
      name: "e-İrsaliye",
      description:
        "e-İrsaliye, kağıt irsaliye’nin dijital ortamda düzenlenen modelidir.",
      icon: "images/icons/despatch.png",
    },
    {
      name: "e-Defter",
      description:
        "e-İrsaliye, kağıt irsaliye’nin dijital ortamda düzenlenen modelidir.",
      icon: "images/icons/notebook.png",
    },
    {
      name: "e-Saklama",
      description:
        "Java e-Saklama ile verilerinizi eksiksiz yedekleyin ve arşivleyin.",
      icon: "images/icons/store.png",
    },
    {
      name: "e-SMM",
      description:
        "Kağıt SMM ile aynı hukuki değerlere sahip dijital belgelerinizi kolayca oluşturun.",
      icon: "images/icons/receipt.png",
    },
  ];
  return (
    <Grid
      container
      justify="center"
      style={{ padding: "1em", marginTop: "2em", backgroundColor: "#f9f9f9" }}
    >
      <Grid item xs={12} md={8}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} style={{ padding: "1em" }}>
            <Grid container direction="row" justify="center">
              <Typography
                variant="h4"
                style={{
                  marginBottom: 10,
                  textAlign: "center",
                }}
              >
                e-Dönüşüm Sistemleri
              </Typography>

              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                }}
              >
                e-Muhasebe, e-Fatura, e-Arşiv, e-Defter, e-İrsaliye, e-Serbest
                Meslek Makbuzu (eSMM), e-Müstahsil Makbuzu (e-MM), e-Bilet
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: "1em" }}>
            <Grid container direction="row" justify="center">
              {services.map((s, i) => (
                <Grid item xs={12} md={6} lg={4} key={i}>
                  <Grid container justify="center" alignItems="center">
                    <img
                      src={s.icon}
                      style={{ width: 75, height: 75 }}
                      alt="Neden Java?"
                    />
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        style={{
                          textAlign: "center",
                        }}
                        color="primary"
                      >
                        {s.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {s.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
