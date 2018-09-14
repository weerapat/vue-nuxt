<template>
  <section>
    <div>
      {{ $t('message.hello') }}

      About us page

      <h4>Route params</h4>
      <div>
        Query params

        {{ $route.params.slug || 'Home' }}
        {{ $route.params.filter || 'Home' }}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    i18n: { // `i18n` option, setup locale info for component
      messages: {
        th: { message: { hello: 'สวัสดี component'} },
        en: { message: { hello: 'hello component' } },
        ja: { message: { hello: 'こんにちは、component' } }
      }
    },
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
