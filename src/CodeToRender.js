import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";

const CodeToRender = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
  }));
  return <ColorButton>Colored Button</ColorButton>;
};

export default CodeToRender;
