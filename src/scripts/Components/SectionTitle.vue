<template lang="pug">
.section-title
  .title {{ title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionTitle extends Vue {
  /** タイトル */
  @Prop({ type: String, required: true })
  title!: string;
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.section-title {
  & {

  }

  & > .title {

  }
}
</style>
