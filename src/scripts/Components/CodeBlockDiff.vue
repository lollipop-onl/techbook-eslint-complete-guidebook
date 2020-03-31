<template lang="pug">
.code-block-diff
  .header
    .before Before
    .after After
  .code
    .block(v-for="n in 2")
      | /* eslint foo bar baz */
      | const foo = () => {
      |   this is a new wor.d.
      | }
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CodeBlockDiff extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.code-block-diff {
  & {
    @include container-horizontal;
  }

  & > .header {
    display: flex;
    justify-content: space-between;
  }

  & > .header > .before,
  & > .header > .after {
    font-size: 9pt;
  }

  & > .header > .before {

  }

  & > .header > .after {

  }

  & > .code {
    display: flex;
    font-family: monospace;
    font-size: 9pt;
  }

  & > .code > .block {
    flex: 1 0;
    white-space: pre-wrap;
  }
}
</style>
