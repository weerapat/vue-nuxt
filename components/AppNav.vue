<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <!--<img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">-->
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Credit Card</a>
      <LocaleChanger/>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/credit-card">Credit Card</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about-us">About Us</nuxt-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>



<script>
  import LocaleChanger from '~/components/LocaleChanger.vue'

  export default {
    components: {
      LocaleChanger
    },
  }
</script>