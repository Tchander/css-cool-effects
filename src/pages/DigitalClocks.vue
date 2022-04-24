<template>
  <div class="digital-clocks">
    <back-home />
    <div class="digital-clock-wrapper">
      <div class="digital-clock">

        <div ref="sc" class="digital-clock__circle" style="--clr:#04fc43;"><i></i></div>
        <div ref="mn" class="digital-clock__circle digital-clock__circle_2" style="--clr:#fee800;"><i></i></div>
        <div ref="hr" class="digital-clock__circle digital-clock__circle_3" style="--clr:#ff2972;"><i></i></div>

        <span class="digital-clock__number" style="--i:1;"><b>1</b></span>
        <span class="digital-clock__number" style="--i:2;"><b>2</b></span>
        <span class="digital-clock__number" style="--i:3;"><b>3</b></span>
        <span class="digital-clock__number" style="--i:4;"><b>4</b></span>
        <span class="digital-clock__number" style="--i:5;"><b>5</b></span>
        <span class="digital-clock__number" style="--i:6;"><b>6</b></span>
        <span class="digital-clock__number" style="--i:7;"><b>7</b></span>
        <span class="digital-clock__number" style="--i:8;"><b>8</b></span>
        <span class="digital-clock__number" style="--i:9;"><b>9</b></span>
        <span class="digital-clock__number" style="--i:10;"><b>10</b></span>
        <span class="digital-clock__number" style="--i:11;"><b>11</b></span>
        <span class="digital-clock__number" style="--i:12;"><b>12</b></span>
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
            hr: null,
            mn: null,
            sc: null,
        };
    },

    mounted() {
        this.hr = this.$refs.hr;
        this.mn = this.$refs.mn;
        this.sc = this.$refs.hr;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 225px 225px 20px 20px;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75),
  10px 10px 70px rgba(0, 0, 0, 0.25),
  inset 5px 5px 10px rgba(0, 0, 0, 0.5),
  inset 5px 5px 20px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}

.digital-clock {
  font-family: 'Poppins', sans-serif;
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
</style>