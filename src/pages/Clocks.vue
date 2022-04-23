<template>
  <div class="clocks">
    <back-home />
    <div class="clock">
      <div class="clock__item">
        <div class="clock__hour" :style="hourStyle" />
      </div>
      <div class="clock__item">
        <div class="clock__min" :style="minuteStyle" />
      </div>
      <div class="clock__item">
        <div class="clock__sec" :style="secondStyle" />
      </div>
    </div>
  </div>
</template>

<script>
import BackHome from "@/components/BackHome";
export default {
  name: "Clocks",
  components: { BackHome },
  data() {
    return {
      day: null,
      hh: null,
      mm: null,
      ss: null,
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
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.clocks {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #091921;
}
.clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../static/images/clock.png");
  background-size: cover;
  border: 4px solid #091921;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 -15px 15px rgba(0, 0, 0, 0.3);

  &:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    z-index: 10000;
  }

  &__item {
    position: absolute;
  }

  &__hour,
  &__min,
  &__sec {
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  &__hour {
    width: 160px;
    height: 160px;

    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 80px;
      background: #ff105e;
      z-index: 10;
      border-radius: 6px 6px 0 0;
    }
  }

  &__min {
    width: 190px;
    height: 190px;

    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 90px;
      background: #0b7ee1;
      z-index: 11;
      border-radius: 6px 6px 0 0;
    }
  }

  &__sec {
    width: 230px;
    height: 230px;

    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 150px;
      background: #fff;
      z-index: 12;
      border-radius: 6px 6px 0 0;
    }
  }
}
</style>
