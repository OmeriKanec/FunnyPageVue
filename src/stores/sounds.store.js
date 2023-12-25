import {defineStore} from "pinia";

export const SoundsStore = defineStore('sounds-store', {
    state: () => ({
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
    }),
    actions: {
        increaseTimesPlayed(sound) {
            this.sounds.at(this.sounds.indexOf(sound)).timesPlayedThisSession++;
        }
    },
})