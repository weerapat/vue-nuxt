<template>
  <div>
    <h1>{{ article.id }} - {{ article.title.rendered }}</h1>
    <p v-html="article.content.rendered"></p>
  </div>
</template>

<script>
  export default {
    async asyncData ({ app, store, params }) {
      console.log(params);

      let article = await app.$wp.pages().slug( params.slug );

      return { article: article[0] }
    }
  }
</script>