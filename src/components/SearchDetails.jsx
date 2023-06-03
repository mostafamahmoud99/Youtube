import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

export default function SearchDetails() {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

useEffect(() => {
  fetchData(`search?part=snippet&q=${searchTerm}`).then((data)=> setVideos(data.items));

}, [searchTerm])


  return (
    <Box p={2} sx={{overflow:'auto' ,height:'90vh' , flex:2}}>
    <Typography
      fontWeight="bold"
      variant="h4"
      mb={2}
      sx={{ color: "#fff" }}
    >
      Search Result for: <span style={{ color: "#fc1503" }}>{searchTerm}</span> videos
    </Typography>

    <Videos videos={videos}/>   
  </Box>
  );
}
