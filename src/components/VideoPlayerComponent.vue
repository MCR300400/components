<template>
    <div class="video-player-component">
      <video ref="videoPlayer" controls>
        <source :src="src" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoPlayerComponent',
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .video-player-component video {
    width: 100%;
    height: auto;
  }
  </style>
  