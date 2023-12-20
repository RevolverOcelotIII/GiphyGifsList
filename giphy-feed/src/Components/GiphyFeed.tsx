import React from "react";
import Navbar from "./Navbar";
import { Feed, FeedBody, FeedHeader } from "./GiphyFeedStyle";
import GifGrid from "./GifGrid";
// Main page for holding the Grid
function GiphyFeed() {
  return (
    <>
      <Navbar />
      <Feed>
        <FeedHeader>
          <h1>Find Here the most trending GIFs from Giphy™!</h1>
          <h3>
            Fell free to Search, Filter and Sort the results at will, click on
            the Gif row to find more details
          </h3>
        </FeedHeader>
        <FeedBody>
          <GifGrid />
        </FeedBody>
      </Feed>
    </>
  );
}

export default GiphyFeed;
