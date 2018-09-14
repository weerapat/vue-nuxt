<!--
   Todo list the tickets
   - Get query param to render the filter
   - Localization url
-->

<template>
  <section>
    <div>
      <h1>Hellooo {{ name }}! {{ $t('title') }}</h1>

      {{ $t('message.hello') }}

      <h4>Route params</h4>
      <div>
        Query params

        {{ $route.params.slug || 'Home' }}
        {{ $route.params.filter || 'Home' }}

        <!--{{ JSON.parse($route.params) }}-->
      </div>


      <h2>Add new card</h2>

      <form>
        <input type="text" v-model="card_name" name="card name" placeholder="new card">
        <button class="btn" type="button"
          @click="addCard()">Add test
        </button>
      </form>

      <h2>Filter</h2>
      <form action="">
        <input type="text" v-model="search" name="search" placeholder="search">
      </form>

      <div>
        <h2 class="subtitle">
          Card listing
        </h2>

        <div v-for="card in cards" :key="card.id">
          {{ card.id }} - {{ card.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import CardFilter from '~/components/CardFilter.vue'

  export default {
    i18n: { // `i18n` option, setup locale info for component
      messages: {
        th: { message: { hello: 'สวัสดี component'} },
        en: { message: { hello: 'hello component' } },
        ja: { message: { hello: 'こんにちは、component' } }
      }
    },

    data(context) {
      console.log(context);
      // called every time before loading the component
      return {
        title: 'My Detail page - Nuxt',
        name: 'Top',
        card_name: '',
        search: '',
        cards: [
          {id: 1, name: 'Ready credit'},
          {id: 2, name: 'Citi cashback credit'}
        ],
      }
    },
    fetch() {
      // The `fetch` method is used to fill the store before rendering the page
    },
    head() {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    methods: {
      addCard: function (event) {
        this.cards.push({id: this.cards.length + 1, name: this.card_name});
      }
    }
  }
</script>

<style scope>
  body {
    background-color: beige;
  }

  section {
    padding-top: 60px;
  }

  .btn {
    display: inline-block;
    padding: 5px 15px;
    background-color: #47494e;
    color: white;
    border-radius: 5px;
  }
</style>
