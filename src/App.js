import { useState } from "react";
import Code from "./Code";
import { alpha, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { orange, deepPurple, deepOrange } from "@mui/material/colors";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import Hello from "./CodeToRender";

function App() {
  const [buttonText, setButtonText] = useState("Javascript");
  const [buttonColor, setButtonColor] = useState("deepOrange");
  const [isCodeDisplayed, setIsCodeDisplayed] = useState(false);

  const handleRenderDisplayedTrue = () => {
    setIsCodeDisplayed(true);
    console.log(isCodeDisplayed);
  };

  const handleRenderDisplayedFalse = () => {
    setIsCodeDisplayed(false);
    console.log(isCodeDisplayed);
  };

  const JavaScriptColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
  }));

  const RenderColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    "&:hover": {
      backgroundColor: deepPurple[700],
    },
  }));
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        item
        xs={3}
        margin="auto"
        paddingTop="20px"
      >
        <Container fixed>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="baseline"
            spacing={2}
          >
            <JavaScriptColorButton
              size="small"
              onClick={handleRenderDisplayedFalse}
            >
              JavaScript
            </JavaScriptColorButton>
            <RenderColorButton size="small" onClick={handleRenderDisplayedTrue}>
              Render
            </RenderColorButton>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            spacing={2}
          >
            <Grid sx={{ paddingTop: "20px" }}>
              {isCodeDisplayed ? <Hello /> : <Code />}
            </Grid>
          </Stack>
        </Container>
      </Grid>
    </>
  );
}

export default App;
