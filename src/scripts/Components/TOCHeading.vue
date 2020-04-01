<template lang="pug">
.toc-heading
  img.icon(src="../../assets/images/hexagon.svg")
  .title {{ title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TOCHeading extends Vue {
  /** タイトルテキスト */
  @Prop({ type: String, required: true })
  title!: string;
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.toc-heading {
  & {
    display: flex;
    align-items: center;
  }

  & > .icon {
    height: 7mm;
  }

  & > .title {
    padding-top: 1.5mm;
    margin-left: 2.4mm;
    font-size: 15pt;
    font-family: $font-family-title-sub;
  }
}
</style>
