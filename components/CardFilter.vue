<template>
  <div class="CardFilter">
    <h2>Add new card</h2>

    <form>
      <input type="text" v-model="card_name" name="card name" placeholder="new card">
      <button class="btn" type="button"
          v-on:click="addCard()">Add</button>
    </form>

    <h2>Filter</h2>
    <form action="">
      <input type="text" v-modle="search" name="search" placeholder="search">
    </form>
  </div>
</template>

<script>
    export default {
        data (context) {
            // called every time before loading the component
            return {
                title: 'My Detail page - Nuxt',
                name: 'Top',
                card_name: '',
                search: '',
                cards: [
                    { id: 1, name : 'Ready credit'},
                    { id: 2, name : 'Citi cashback credit'}
                ],
            }
        },
        methods: {
            addCard: function (event) {
                this.cards.push({ id: this.cards.length + 1, name : this.card_name});
            }
        }
    }
</script>
