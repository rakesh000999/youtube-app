import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img
        className="rounded-lg"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// Higher order component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 border border-red-700">
      <VideoCard info={info} />
      <div className="font-bold"> Ad</div>
    </div>
  );
};

export default VideoCard;
