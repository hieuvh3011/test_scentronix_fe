import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const imageWrapper: SxProps<Theme> = {
  flex: "0 0 auto",
  height: "500px",
  position: "relative",
  overflow: "hidden",
};

export const button: SxProps<Theme> = {
  minHeight: "initial",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1.5,
  mx: 1,
  fontSize: "10px",
  padding: "8px 12px",
  width: "auto",
  minWidth: "initial",
  whiteSpace: "nowrap",
  borderColor: "#c62828",
  borderWidth: "2px",
};