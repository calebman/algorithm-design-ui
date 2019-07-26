<template>
  <section>
    <count-to/>
    <p>
      指定开始/结束值：
      <count-to :startVal="100" :endVal="3000"/>
    </p>
    <p>
      指定填满毫秒数：
      <count-to :startVal="100" :endVal="3000" :duration="1000"/>
    </p>
    <p>
      指定数字分隔符：
      <count-to :endVal="3000" separator="'"/>
    </p>
    <p>
      指定前/后缀：
      <count-to prefix="共 " suffix=" 个"/>
    </p>
  </section>
</template>