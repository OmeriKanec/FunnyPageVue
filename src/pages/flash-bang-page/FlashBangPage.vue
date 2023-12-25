<template>
    <img ref="gif" src="">
</template>

<script>
export default {
  name: 'flashBang',
  data() {
    return {
      gifSrc: '',
      sound: new Audio(),
    }
  },
  methods: {
    playSound(soundSrc) {
      this.sound = new Audio(soundSrc);
      this.sound.addEventListener('ended', () => {
        this.$router.go(-1);
      });
      this.sound.play();
    },
  },
  created() {

  },
  mounted() {
    this.$refs.gif.src = "src/assets/images/thinkfast-chuklenuts.gif";
    this.$refs.gif.width = window.innerWidth;
    this.$refs.gif.height = window.innerHeight;
    this.playSound("src/assets/sounds/think-fast-chucklenuts.mp3");
  },
  beforeRouteLeave() {
    this.$refs.gif.src = "";
    this.sound.pause();
  }
}
</script>
