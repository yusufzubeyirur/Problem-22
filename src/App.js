import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState("Duraklatıldı");

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying("Oynatılıyor");
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying("Duraklatıldı");
  };

  console.log("Title Element:", titleRef.current);
  console.log("Video Element:", videoRef.current);

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 ref={titleRef} className="text-center font-bold text-3xl">
        Video Oynatıcı
      </h1>
      <video
        className="w-full"
        ref={videoRef}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        controls
      />
      <div className="flex justify-between">
        <button onClick={handlePause} className="text-orange-500 font-semibold">
          Duraklat
        </button>
        <div>{isPlaying}</div>
        <button onClick={handlePlay} className="text-indigo-500 font-semibold">
          Oynat
        </button>
      </div>
    </div>
  );
}
