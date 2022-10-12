<script lang="ts">
    import { createEventDispatcher } from "svelte/internal";
  import Field from "./Field.svelte";
    import { getCurrent, getSolution } from "./state";
  const current = getCurrent();
  const solution = getSolution();

  export let indexes: Array<number>;


</script>

<div class="grid border-solid border-b-4 border-r-4 {$current == $solution ? "border-green-500" : "border-black"} grid-cols-3 grid-rows-3">
  {#each indexes as i}
    <Field on:active {i} />
  {/each}
</div>

<style>
</style>
