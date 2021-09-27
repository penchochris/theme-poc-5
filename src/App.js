import { Typography, Button, Grid, Divider, ThemeProvider } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={10}></Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={10}>
          <Typography variant="h1">Buttons Text:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="text">PRIMARY TEXT</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" color="secondary">
            SECONDARY TEXT
          </Button>
        </Grid>
        {/* CONTAINED  */}
        <Grid item xs={10}>
          <Typography variant="h1">Buttons contained:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">PRIMARY CONTAINED</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary">
            SECONDARY CONTAINED
          </Button>
        </Grid>
        {/* OUTLINED  */}
        <Grid item xs={10}>
          <Typography variant="h1">Buttons outlined:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined">PRIMARY OUTLINED</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined" color="secondary">
            SECONDARY OUTLINED
          </Button>
        </Grid>
        {/* CUSTOM: DASHED  */}
        <Grid item xs={10}>
          <Typography variant="h1">Custom variant: "dashed":</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="dashed">PRIMARY DASHED</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="dashed" color="secondary">
            SECONDARY DASHED
          </Button>
        </Grid>
        {/* CUSTOM: COLORS  */}
        <Grid item xs={10}>
          <Typography variant="h1">Custom color: "banana":</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="banana">
            CUSTOM TEXT
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="banana" startIcon={<ArrowBack />}>
            CUSTOM ICON TEXT
          </Button>
        </Grid>
        {/* WITH ICON  */}
        <Grid item xs={10}>
          <Typography variant="h1">With Icons:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" color="primary" startIcon={<ArrowBack />}>
            PRIMARY TEXT
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="text" color="primary" endIcon={<ArrowForward />}>
            PRIMARY TEXT
          </Button>
        </Grid>
        {/* TYPOS  */}
        <Grid item xs={10}>
          <Typography variant="h1">Typographies:</Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider />
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={5}>
          <Typography variant="h1">This is an H1 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h2">This is an H2 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h3">This is an H3 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4">This is an H4 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">This is an H5 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1">This is an body1 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body2">This is an body2 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1">This is an subtitle1 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2">This is an subtitle2 text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="caption">This is an caption text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="overline">This is an overline text</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="lime">
            This is a custom text called "lime"
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
