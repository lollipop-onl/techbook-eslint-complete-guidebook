<template lang="pug">
.app-container(ref="wrapper" :style="wrapperStyle")
  .container(ref="container" :style="containerStyle")
    slot
</template>

<script lang="ts">
import { bind, debounce } from 'helpful-decorators';
import { Component, Ref, Vue } from 'vue-property-decorator';

@Component
export default class AppContainer extends Vue {
  /** ラッパの幅 */
  wrapperWidth = 0;

  /** コンテナの幅 */
  containerWidth = 0;

  /** コンテナの高さ */
  containerHeight = 0;

  /** コンテナラッパの要素への参照 */
  @Ref('wrapper')
  wrapperElement?: HTMLDivElement;

  /** コンテナの要素への参照 */
  @Ref('container')
  containerElement?: HTMLDivElement;

  /** ラッパのスタイル */
  get wrapperStyle(): Record<string, string> {
    const scale = this.wrapperWidth / this.containerWidth;

    return {
      height: `${this.containerHeight * scale}px`,
    };
  }

  /** コンテナのスタイル */
  get containerStyle(): Record<string, string> {
    const scale = this.wrapperWidth / this.containerWidth;

    return {
      transform: `scale(${scale})`,
    };
  }

  /** ライフサイクル */
  mounted(): void {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  /** ライフサイクル */
  beforeDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  /** 画面幅が変更されたときに呼ばれるメソッド */
  @bind
  @debounce()
  onResize(): void {
    const { wrapperElement, containerElement } = this;

    if (!wrapperElement || !containerElement) {
      return;
    }

    const { width: wrapperWidth } = wrapperElement.getBoundingClientRect();
    const { width: containerWidth, height: containerHeight } = containerElement.getBoundingClientRect();

    this.wrapperWidth = wrapperWidth;
    this.containerWidth = containerWidth;
    this.containerHeight = containerHeight;
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-container {
  & {
    width: 100%;
  }

  & > .container {
    width: $page-width;
    margin: 0 auto;
  }
}
</style>
