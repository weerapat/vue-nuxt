<template>
  <div>
    <!--<app-header/>-->
    <app-nav/>
    <div class="container">
      <div class="text-center">
        <img src="@/assets/images/rf-blog.svg" class="logo" width="280">
      </div>
      <nuxt/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import AppNav from '~/components/AppNav.vue';
  import AppHeader from '~/components/AppHeader.vue';
  import AppFooter from '~/components/AppFooter.vue';

  export default {
    components: {
      AppNav,
      AppHeader,
      AppFooter,
    },
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.logo {
  margin: 20px 0;
}

body {
  background-color: beige;
}

section {
  padding-top: 60px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

