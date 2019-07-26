<!-- Histogram component description  -->
<template>
  <div class="card-wrapper" :data-sort-index="sortIndex" :style="{height: value * HEIGHT_INCREMENT + 'px',transform: 'translateX('+sortIndex*100+'%)'}">
    <!-- 通过改变class，来改变颜色 -->
    <div class="card" :class="cardClassObject">
      <div class="value">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Histogram',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="sass" scoped>
$transition-time: 200ms;
$easing: cubic-bezier(0.175, 0.885, 0.320, 1.275);

@import url('https://fonts.googleapis.com/css?family=Titillium+Web:700');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font: 700 16px/1 'Titillium Web', sans-serif;
}

body {
  margin: 40px 0;
  color: #fff;
  background-color: #000;
}

#app {
  width: 640px;
  margin: 0 auto;
}

.cards {
  position: relative;
  height: 400px;
}

.card-wrapper {
  position: absolute;
  bottom: 0;
  width: 6.25%;
  transition: transform $transition-time $easing;
}

.card {
  position: relative;
  height: 100%;
  margin: 0 5px;
  border: 1px solid #ff3179;
  background-color: #000;
  box-shadow: 0 0 25px #c2255c;
  .card-active {
  filter: hue-rotate(200deg);
}
}

.card-locked {
  filter: hue-rotate(280deg);
}

.value {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 1.25rem;
}

.control-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 5px 0;
  padding-top: 20px;
  border-top: 1px solid #fff;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

button {
  appearance: none;
  background: none;
  border: none;
  color: #ff3179;
  font-size: 1.5rem;
  cursor: pointer;
}

@media only screen and (min-width: 880px) {
  #app { width: 800px; }
  .value { font-size: 1.5rem; }
}

@media only screen and (min-width: 1084px) {
  #app { width: 1024px; }
  .value { font-size: 1.75rem; }
}

</style>
