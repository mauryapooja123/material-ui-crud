import React from "react";
import { Grid, TextField, Button, Paper } from "@mui/material";
import { Container } from "@mui/material";

function LoginForm() {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid align="center">
          <h2> Login Form</h2>
        </Grid>
        <Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <form>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="username"
                          variant="outlined"
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item></Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginForm;
