import { useState } from "react";
import { Pre } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//replace the code here
const exampleCode = `
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";

const ColorButton = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: deepOrange[700],
    },
  }));

  return <ColorButton>Colored Button</ColorButton>;
};

export default ColorButton;
`.trim();

const Code = () => (
  <>
    <Highlight
      {...defaultProps}
      theme={theme}
      code={exampleCode}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  </>
);

export default Code;
