import { RefObject, useEffect, useRef, useState } from "react";
import Button from "./components/button";

const stopSeconds = [
  3,
  7,
  13,
  18,
  23
];

export default () => {
  const [time, setTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(videoTime(videoRef) ?? 0);
    }, 1000);
    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    const index = stopSeconds.findIndex(e => e == time)
    if (index === -1) return;

    console.log(time);
  }, [time]);

  return (
    <div>
<h1 className="text-3xl font-bold">
      Hello world!
    </h1>
      <div>{time}</div>
      <video ref={videoRef} id="video" width="640" height="480" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <Button name="Previous" />
        <Button name="Next" />
    </div>
  );
};

const videoTime = (videoRef: RefObject<HTMLVideoElement>): number | null =>
  videoRef.current ? Math.floor(videoRef.current.currentTime) : null;
