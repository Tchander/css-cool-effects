<template>
  <div class="digital-clocks">
    <back-home />
    <div class="digital-clock-wrapper">
      <div class="digital-clock">

        <div class="digital-clock__circle" style="--clr:#04fc43;" :style="secondStyle"><i></i></div>
        <div class="digital-clock__circle digital-clock__circle_2" style="--clr:#fee800;" :style="minuteStyle"><i></i></div>
        <div class="digital-clock__circle digital-clock__circle_3" style="--clr:#ff2972;" :style="hourStyle"><i></i></div>

        <span
            v-for="index in 12"
            class="digital-clock__number"
            :style="`--i:${index};`"
            :key="index">
            <b>{{ index }}</b>
        </span>
      </div>

      <div class="digital-time">
        <div class="digital-time__item" style="--clr:#ff2972;">{{ hours }}</div>
        <div class="digital-time__item" style="--clr:#fee800;">{{ minutes }}</div>
        <div class="digital-time__item" style="--clr:#04fc43;">{{ seconds }}</div>
        <div class="digital-time__item">{{ ampm }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from "@/components/BackHome";
export default {
    name: "DigitalClocks",
    components: { BackHome },
    data() {
        return {
            day: null,
            hh: null,
            mm: null,
            ss: null,
            hours: null,
            minutes: null,
            seconds: null,
            ampm: null,
            colors: ["#04fc43", "#fee800", "#ff2972"],
        };
    },

    mounted() {
        this.changeTime();
    },

    computed: {
        hourStyle() {
            return { transform: `rotateZ(${this.hh + this.mm / 12}deg)` };
        },
        minuteStyle() {
            return { transform: `rotateZ(${this.mm}deg)` };
        },
        secondStyle() {
            return { transform: `rotateZ(${this.ss}deg)` };
        },
    },

    methods: {
        changeTime() {
            setInterval(() => {
                this.day = new Date();
                this.hh = this.day.getHours() * 30;
                this.mm = this.day.getMinutes() * 6;
                this.ss = this.day.getSeconds() * 6;

                this.hours = this.day.getHours();
                this.minutes = this.day.getMinutes();
                this.seconds = this.day.getSeconds();

                this.ampm = this.hours >= 12 ? "PM" : "AM";

                if (this.hours > 12) {
                    this.hours = this.hours - 12;
                }

                this.hours = (this.hours < 10) ? "0" + this.hours : this.hours;
                this.minutes = (this.minutes < 10) ? "0" + this.minutes : this.minutes;
                this.seconds = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
            });
        },
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

.digital-clocks {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2f363e;
}

.digital-clock-wrapper {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 225px 225px 20px 20px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75),
  10px 10px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}

.digital-clock {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 450px;
  height: 450px;
  background: #2f363e;
  border-radius: 50%;
  box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  margin-bottom: 30px;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: #2f363e;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 100000;
  }

  &__circle {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.25);
    z-index: 10;

    i {
      position: absolute;
      width: 6px;
      height: 50%;
      background: var(--clr);
      opacity: 0.75;
      transform-origin: bottom;
      transform: scaleY(0.5);
    }

    &:nth-child(1) {
      i {
        width: 2px;
      }
    }

    &_2 {
      width: 240px;
      height: 240px;
      z-index: 9;
    }

    &_3 {
      width: 180px;
      height: 180px;
      z-index: 8;
    }

    &:before {
      content: "";
      position: absolute;
      top: -8.5px;
      width: 15px;
      height: 15px;
      background: var(--clr);
      border-radius: 50%;
      box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
    }
  }

  &__number {
    position: absolute;
    inset: 20px;
    text-align: center;
    transform: rotate(calc(30deg * var(--i)));

    b {
      font-size: 2em;
      font-weight: 600;
      opacity: 0.25;
      display: inline-block;
      transform: rotate(calc(-30deg * var(--i)));
    }
  }
}

.digital-time {
  display: flex;
  margin-bottom: 40px;
  padding: 20px 40px;
  font-size: 2em;
  font-weight: 600;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(255, 255, 255, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);

  &__item {
    position: relative;
    width: 60px;
    text-align: center;
    font-weight: 500;
    color: var(--clr);

    &:nth-child(1)::after,
    &:nth-child(2)::after {
      content: ":";
      position: absolute;
      right: -4px;
    }

    &:last-child {
      font-size: 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }

    &:nth-child(2)::after {
      animation: animate 1s steps(1) infinite;
    }

    @keyframes animate {
      0%
      {
        opacity: 1;
      }
      50%
      {
        opacity: 0;
      }
    }
  }
}
</style>