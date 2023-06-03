import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root";
import Feed from "./components/Feed";
import { Box } from "@mui/material";
import NotFound from "./components/NotFound";
import SearchDetails from "./components/SearchDetails";
import ChannelDetails from "./components/ChannelDetails";
import VideoDetails from "./components/VideoDetails";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Feed />} />
      <Route path='video/:id' element={<VideoDetails/>}/>
      <Route path="channel/:id" element={<ChannelDetails/>}/>
      <Route path="search/:searchTerm" element={<SearchDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

export default function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <RouterProvider router={router} />
    </Box>
  );
}