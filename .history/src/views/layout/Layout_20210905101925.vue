<template>
  <div>
    <a-layout>
      <a-layout-sider class="sider">Sider</a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content<router-view /></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sider{
  overflow : 'auto'
  height = '100vh'
  position = 'fixed'
  left = 0
}
</style>
