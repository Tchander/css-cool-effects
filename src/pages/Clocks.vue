<template>
  <div class="clocks">
    <div class="clock">
      <div class="clock__hour">
        <div class="clock__hr" ref="hr" />
      </div>
      <div class="clock__min">
        <div class="clock__mn" ref="mn" />
      </div>
      <div class="clock__sec">
        <div class="clock__sc" ref="sc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clocks",
  data() {
    return {
      hr: null,
      mn: null,
      sc: null,
      day: null,
      hh: null,
      mm: null,
      ss: null,
    };
  },

  mounted() {
    this.changeTime();
  },

  methods: {
    changeTime() {
      this.hr = this.$refs.hr;
      this.mn = this.$refs.mn;
      this.sc = this.$refs.sc;

      setInterval(() => {
        this.day = new Date();
        this.hh = this.day.getHours() * 30;
        this.mm = this.day.getMinutes() * 6;
        this.ss = this.day.getSeconds() * 6;

        this.hr.style.transform = `rotateZ(${this.hh + this.mm / 12}deg)`;
        this.mn.style.transform = `rotateZ(${this.mm}deg)`;
        this.sc.style.transform = `rotateZ(${this.ss}deg)`;
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

  &__hour,
  &__min,
  &__sec {
    position: absolute;
  }

  &__hr,
  &__mn,
  &__sc {
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }

  &__hr {
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

  &__mn {
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

  &__sc {
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
