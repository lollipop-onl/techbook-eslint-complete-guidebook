<template lang="pug">
AppPage
  .eslint-door-page
    img.icon(src="../../assets/images/hexagon.svg")
    .title ESLint Rules
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class ESLintDoorPage extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.eslint-door-page {
  & {
    @include container;
    @include container-full;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }

  & > .icon {
    width: 28mm;
  }

  & > .title {
    margin: 32mm 0 52mm;
    font-family: $font-family-title-sub;
    font-size: 24pt;
  }
}
</style>
