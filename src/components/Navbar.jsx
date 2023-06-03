import { Paper, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        backgroundColor: "#000",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex:100
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} height={45} alt="" />
      </Link>

      <SearchBar />
    </Stack>
  );
}
