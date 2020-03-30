<template lang="pug">
  div
    AppGuide
    template(v-for="n in 100")
      h1 hello you.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";

@Component({
  components: {
    AppGuide
  }
})
export default class  extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
