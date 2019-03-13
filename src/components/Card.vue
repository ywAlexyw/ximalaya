<template>
  <div class="r-card">
    <div class="r-card-header">
      <div class="r-card-header-l">
        <span class="r-card-header-i"
           v-if="$slots.icon || icon">
          <slot name="icon"/>
          <i v-if="icon" :class="'xuicon xuicon-' + icon" :style="{ color: iconColor }"></i>
        </span>
        <span>{{title}}</span>
      </div>
      <div class="r-card-header-r">
        <slot name="headerRight"/>
      </div>
    </div>
    <div class="r-card-content">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    icon: String,
    iconColor: String
  }
}
</script>
<style lang="scss">
.r-card {
  width: 240px;
  padding: 0 10px;
  background: #fff;
  box-sizing: border-box;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    border-bottom: 1px solid #e8e8e8;
    &-l {
      display: flex;
      align-items: center;
    }
    &-i {
      margin-right: 5px;
    }
  }
}
</style>

