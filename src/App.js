import { useState } from "react";
import Code from "./Code";
import { alpha, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { orange, deepPurple, deepOrange } from "@mui/material/colors";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Hello from "./CodeToRender";

function App() {
  const [buttonText, setButtonText] = useState("Javascript");
    const [buttonColor, setButtonColor] = useState("deepOrange");
    const [isCodeDisplayed, setIsCodeDisplayed] = useState(false);

    const handleRenderDisplay = () => {
        setIsCodeDisplayed(!isCodeDisplayed);
    };


    return (
        <div className="modulate">
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
                    <FormGroup>
                        <FormControlLabel control={<Switch color="secondary" defaultChecked onChange={handleRenderDisplay} />} label={isCodeDisplayed ? "Show Code" : "Show Render"} />
                    </FormGroup>
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
        </div>
    );
}

export default App;
