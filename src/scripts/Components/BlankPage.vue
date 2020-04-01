<template lang="pug">
AppPage
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class BlankPage extends Vue {}
</script>

<style lang="scss" scoped>
</style>
