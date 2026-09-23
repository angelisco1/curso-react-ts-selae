import React, { useRef, useState } from 'react'
import Video from '../assets/video.mp4'

const Tema06Referencias = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  console.log(videoRef)
  const [currentTime, setCurrentTime] = useState<number>(0)


  const playVideo = () => {
    videoRef.current?.play()
  }

  const pauseVideo = () => {
    videoRef.current?.pause()
  }

  const fullScreen = () => {
    videoRef.current?.requestFullscreen()
  }

  const cambiarCurrentTime = (event: any) => {
    console.log(event.target.currentTime)
    setCurrentTime(event.target.currentTime)
  }


  return (
    <div>
      <h2>Tema 06: Referencias</h2>

      <video width="200" src={Video} ref={videoRef} onTimeUpdate={cambiarCurrentTime}></video>

      <label>
        <progress value={currentTime} max={videoRef.current?.duration}></progress>
        {currentTime} / {videoRef.current?.duration}
      </label>

      <button type="button" onClick={playVideo}>Play</button>
      <button type="button" onClick={pauseVideo}>Pause</button>
      <button type="button" onClick={fullScreen}>Fullscreen</button>


    </div>
  )
}

export default Tema06Referencias