<template>
  <div class="mainLayout clearfix">
    <div class="left-side">
      <slot name="left"/>
    </div>
    <div class="right-side">
      <slot name="right"/>
    </div>
  </div>
</template>
<style>
  .mainLayout {
    width: 1080px;
    margin: 0 auto;
  }
  .mainLayout .left-side {
    width: 820px;
    float: left;
  }
  .mainLayout .right-side {
    width: 240px;
    margin-left: 20px;
    float: left;
  }
</style>
