<template>
  <a-card style="width: 240px">
    <count-to class="count" :endVal="18752"/>
    <a-card-meta title="数据条目">
      <template slot="description">昨日新增数据量</template>
    </a-card-meta>
  </a-card>
</template>

<style scoped>
.count {
  font-size: 45.8889px;
  text-align: center;
  color: #03a9f4;
  font-weight: 700;
  line-height: 137.667px;
}
</style>
