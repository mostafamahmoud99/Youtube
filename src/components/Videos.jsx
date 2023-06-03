import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

export default function Videos({ videos,direction }) {
if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || 'row'} justifyContent='center' gap={2} flexWrap='wrap'>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channel={item}/>}
          {item.id.videoId && <VideoCard videos={item}/>}
        </Box>
      ))}
    </Stack>
  );
}
