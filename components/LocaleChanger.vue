<template>
  <div class="locale-changer">
    <select v-model="lang" @change="switchLang">
      <option v-for="(lang, i) in this.$store.state.locales" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lang: this.$store.state.locale
      }
    },

    methods: {
      switchLang() {
        let path = this.$route.path;

        if (path[0] === '/') {
          path = path.substr(1);
        }

        let pathArray = path.split('/');

        // slice localize string from path of url
        if (this.$store.state.locales.includes(pathArray[0])) {
          pathArray.splice(0, 1);
        }

        window.location.href = `/${this.lang}/${pathArray.join('/')}`;
      }
    },
  }
</script>