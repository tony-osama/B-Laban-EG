import React from 'react'
import NavBar from './NavBar'
import Video from '../assets/video/video.mp4'
import "./scss/Header.scss"
export default function Header() {
  return (
    <header>
        <NavBar/>
        <video src={Video} controls autoPlay={true}></video>
    </header>
)
}
