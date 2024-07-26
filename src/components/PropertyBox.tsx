import { Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface IPropertyBoxProps {
  title: string;
  value: string;
  icon?: ReactNode;
}

export default function PropertyBox(props: IPropertyBoxProps) {
  return (
    <Container
      sx={{ display: "inline-flex", alignItems: "center", gap: 2, padding: 1 }}
      disableGutters={true}
    >
      {props.icon !== undefined && props.icon}
      <Container disableGutters={true}>
        <Typography variant="subtitle2" sx={{fontWeight: 'bold', fontSize: '12px'}}>{props.title}</Typography>
        <Typography variant="body2" sx={{fontWeight: 'bold'}}>{props.value}</Typography>
      </Container>
    </Container>
  );
}
