import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchData } from "../utils/fetchFromAPI";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

useEffect(() => {
  fetchData(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items));

}, [selectedCategory])



  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1PX solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          CopyRight 2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto' ,height:'90vh' , flex:2}}>
        <Typography
          fontWeight="bold"
          variant="h4"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#fc1503" }}>videos</span>
        </Typography>

        <Videos videos={videos}/>   
      </Box>
    </Stack>
  );
}
