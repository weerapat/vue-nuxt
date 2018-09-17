00

<script>
  export default {
    data () {
      return {
        lang: this.$store.state.locale
      }
    },

    methods: {
      switchLang() {
        console.log(this.$route.params.lang);

        let path = this.$route.path;

        path[0] === '/'

        let paths = this.$route.path.split('/');

      }
    },
  }
</script>