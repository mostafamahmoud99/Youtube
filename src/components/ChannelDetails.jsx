import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

export default function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);


  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`,
            height: 300,
            zIndex: 10,
          }}
        />
        <ChannelCard marginTop="-93px" channel={channelDetails} />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
}
