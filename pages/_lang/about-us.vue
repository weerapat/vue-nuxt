<template>
  <section>
    {{ $t('message.hello') }}

    About us page
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
