import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em;
  padding-left: 10px;
  padding-bottom: 20px;
  padding-right: 20px;
  border-radius: 10px;
  overflow: auto;
  width: auto + 20px;
  height: 300px;
  position: relative;
  & .token-line {
    line-height: 2em;
    height: 1.4em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
