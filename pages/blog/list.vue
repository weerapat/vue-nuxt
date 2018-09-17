<template>
  <div>
    <h1>Hi Posts</h1>

    {{ articles }}
  </div>
</template>

<script>
  export default {
    async asyncData ({ app, store, params }) {
      return { articles: await app.$wp.posts().perPage(10) }
    }
  }
</script>