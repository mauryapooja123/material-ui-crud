import { Grid, TextField, Button, Paper } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";

function UserForm(props) {
  return (
    <div className="UserForm">
      <Grid>
        <Container
          maxWidth="sm"
          style={{ "background-color": "rgb(142, 148, 148)" }}
        >
          <Grid>
            <Grid align="center">
              <h2> Login Form</h2>
            </Grid>
            <Paper variant="elevation" className="login-background">
              <TextField
                type="text"
                placeholder="Enter username"
                fullWidth
                required
                value={props.userData && props.userData.username}
                name="username"
                onChange={props.handleChange}
              />

              <p style={{ color: "red" }}>
                {props.errors && props.errors.username}
              </p>
              <TextField
                placeholder="Enter Email"
                type="email"
                fullWidth
                required
                name="email"
                value={props.userData && props.userData.email}
                onChange={props.handleChange}
              />
              <p style={{ color: "red" }}>
                {props.errors && props.errors.email}
              </p>
              <TextField
                placeholder="Enter password"
                type="password"
                fullWidth
                name="password"
                value={props.userData && props.userData.password}
                onChange={props.handleChange}
              />
              <p style={{ color: "red" }}>
                {props.errors && props.errors.password}
              </p>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                onClick={props.handleSubmit}
              >
                submit
              </Button>
            </Paper>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default UserForm;
