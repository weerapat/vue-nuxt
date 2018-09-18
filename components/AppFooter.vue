<template>
  <footer v-html="footerView"></footer>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted () {
      let self = this;
      // We can use async/await ES6 feature
      axios.get('/api/footer.json')
        .then(function (response) {
          // handle success
          console.log(response);
          self.footerView = response.data.view;
        });
    },
    data () {
      return {
        footerView : '',
      }
    }
  }
</script>