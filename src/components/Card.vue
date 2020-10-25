<template>
  <div class="card" :class="{'open': open && active}" @click="open = !open">
    <div class="img" :style="backgroundImage">
      <transition name="fade">
        <button v-if="open" class="submit">Accept Challenge</button>
      </transition>
      <div
        v-if="!open"
        class="timer"
      >{{displayDays}}:{{displayHours}}:{{displayMinutes}}:{{displaySeconds}}</div>
    </div>
    <div class="title">{{ item.title }}</div>
    <div class="description">
      {{ item.description }}
      <br />
      <span>
        <br />
        <h2>
          Entry: {{item.entry}}
          <hr />
        </h2>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      open: false,
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0
    };
  },

  props: ["item", "active"],
  computed: {
    backgroundImage() {
      return {
        "background-image": "url(" + require("../assets" + this.item.img) + ")"
      };
    },
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },

  mounted() {
    this.showRemaining();
  },

  methods: {
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 10, 1, 10, 10, 10);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        this.displaySeconds = seconds < 10 ? "0" + seconds : seconds;
        this.displayHours = hours < 10 ? "0" + hours : hours;
        this.displayDays = days < 10 ? "0" + days : days;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  width: 75vw;
  height: 70vh;
  background-color: #efefef;
  overflow: hidden;
  transition: all 0.5s ease;
  border-radius: 10px;
  margin: 20% 10%;
  &.open {
    height: 100vh;
    transform: translateY(-30vh);
  }

  .img {
    width: 100%;
    height: 70vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 

  .pricetag h1 {
    color: rgb(123, 2, 215);
  }
  .submit {
    position: relative;
    display: flex;
    align-items: center;
    color: #ffffff;
    width: 80%;
    height: 10vh;
    text-align: center;
    justify-content: center;
    font-size: 3vh;
    border-image-source: linear-gradient(#ff008e, #5100ee);
    border-image-slice: 1;
    background-color: rgba(0, 0, 0, 0.32);
    cursor: pointer;
  }

  .timer {
    position: absolute;
    bottom: 8%;
    font-size: 200%;
    font-weight: bolder;
    color: rgb(255, 255, 255);
  }

  .title {
    position: absolute;
    top: 50px;
    font-weight: bold;
    padding: 5px 20px;
    width: calc(100% - 20px);
    height: 40px;
    font-size: 1.6rem;
    color: #fff;
    
  }
  .description {
    font-size: 15px;
    padding: 15px;
    color: #333;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>