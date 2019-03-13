<template>
    <audio  id="audio" ref="audio"
                        :src="audio.src"
                        :music="musicPlaying"
                        :title="audio.title"></audio>
</template>

<script>

    export default {
        data () {
            return {
                allTime: '',
            }
        },
        methods:{
            play() {
                this.$nextTick(() => {
                    this.$el.play()
                    if(!this.timer) {
                        this.timer  = setInterval(this.setCurrentTime , 1000)
                    }
                    this.setAllTime()
                })
                // this.$refs.audio.play()
            },
            pause() {
                this.$nextTick(() => {
                    this.$el.pause()
                    clearInterval(this.timer)
                    this.timer  = 0
                })
                // this.$refs.audio.pause()
            },
            setCurrentTime() {
                    let currentTime = this.timeFormat(this.$el.currentTime)
                    this.$store.commit('getCurrentTime', currentTime)
            },
            setAllTime() {
                var audio = document.getElementById('audio') 
                audio.oncanplay =  () => {
                    this.allTime = audio.duration
                    let musicTime = this.timeFormat(audio.duration - 1)
                    this.$store.commit('getAllTime', musicTime)
                }
            },
            timeFormat(number) {
                var minute = parseInt(number / 60)
                var second = parseInt(number % 60)
                minute = minute >= 10 ? minute : "0" + minute
                second = second >= 10 ? second : "0" + second
                return minute + ":" + second
            },
            setChangeTime () {
                let time = this.$store.state.player.changeTime
                var audio = document.getElementById('audio')
                audio.currentTime = time
            }
        },
        computed: {
            audio() {
                return this.$store.state.player.audio || {}
            },
            musicPlaying() {
                return this.$store.state.player.playing
            },
        },
        watch: {
            '$store.state.player.audio' (val) {
                this.play()
            },
            '$store.state.player.playing' (val) {
                if (val) { 
                    this.play()
                }else{
                    this.pause()
                }
            },
            '$store.state.player.changeTime' (val) {
                if (this.audio !== null) {
                    this.setChangeTime()
                }
            }
        },
        mounted () {
            var audio = document.getElementById("audio")
            audio.addEventListener('ended',  () => {
                this.$store.commit('pause')
            }
            , false)
        }
    }
</script>
