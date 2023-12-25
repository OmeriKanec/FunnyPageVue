<template>
  <h1>Sounds list</h1>
  <div class="list">
    <div class="listItem" v-for="sound in soundsStore.sounds" @click="playSound(sound.soundSrc, sound)">
      <img :src="sound.imgSrc" class="listItem-image" @mouseover="showTextOfItemWithId(sound.id)" @mouseleave="setMouseOverIdToMinus1">
      <div class="listItem-text" v-show="mouseOverId === sound.id">{{sound.text}} <p>Times played: {{sound.timesPlayedThisSession}}</p></div>
    </div>
  </div>
</template>

<script>

import {SoundsStore} from "@/stores/sounds.store.js";

export default{
  name: 'SoundsListPage',
  data() {
    return {
      sounds: [{
        id: 0,
        imgSrc: "src/assets/images/metalPipe.png",
        soundSrc: "src/assets/sounds/metal-pipe-falling-sound-effect.mp3",
        text: "MetalPipe",
        timesPlayedThisSession: 0,
      },
    {
      id: 1,
      imgSrc: "src/assets/images/wenamecha.jpg",
      soundSrc: "src/assets/sounds/wenomechainsama.mp3",
      text: "wenomechainsama",
      timesPlayedThisSession: 0,
    },
        {
          id: 2,
          imgSrc: "src/assets/images/ambatakum.png",
          soundSrc: "src/assets/sounds/ambatakum-choir.mp3",
          text: "ambatakum",
          timesPlayedThisSession: 0,
        }
        ],
      soundsPlaying: [

      ],
      mouseOverId: -1,

    }
  },
  methods: {
    playSound(soundSrc, sou) {
      const sound = new Audio(soundSrc);
      this.soundsPlaying.push(sound);
      sound.addEventListener('ended', () => {
        this.soundsPlaying.splice(this.soundsPlaying.indexOf(sound), 1)
      })
      this.soundsStore.increaseTimesPlayed(sou);
      sound.play();
    },
    showTextOfItemWithId(id) {
      this.mouseOverId = id;
    },
    setMouseOverIdToMinus1() {
      this.mouseOverId = -1;
    },
  },
  beforeRouteLeave() {
    this.soundsPlaying.forEach((sound) => sound.pause())
  },
  setup() {
    const soundsStore = SoundsStore();
    return {
      soundsStore
    }
  },
}

</script>

<style>
.list {
}
.listItem {
  display: flex;
  margin-bottom: 30px;
  text-align: center;
}
.listItem-image {
  width: 70%;
  max-height: 700px;
}
</style>
