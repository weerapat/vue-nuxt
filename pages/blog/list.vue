<template>
  <div>
    <h1>RF blog articles - {{ articles.length }} Articles</h1>

    <div v-for="article in articles" :key="article.id">

      <h2>
        <a :href="`/blog/${ article.slug }`">
          {{ article.id }} - {{ article.title.rendered }}
        </a>
      </h2>

      <div>
        <span class="badge badge-info">Slug</span>
        {{ article.slug }}
      </div>

      <p v-html="article.content.rendered"></p>

    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ app, store, params }) {
      return { articles: await app.$wp.posts().perPage(20) }
    }
  }
</script>

<style scope>
  h2 a {
    color: #35495e;
  }
</style>