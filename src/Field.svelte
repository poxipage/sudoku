<script lang="ts">
    import { createEventDispatcher } from "svelte/internal";
    import { getActiveIndex, getCurrent, getSolution } from "./state";

    const dispatch = createEventDispatcher();

    const current = getCurrent()
    export let i: number;
    const activeIndex = getActiveIndex();
    const solution = getSolution();

    $: digit = $current[i] == "-" ?  " " : $current[i]
    const makeFieldActive = () => {
        dispatch('active', {
            value: i 
        })
    }
</script>
  
<div class="border-solid border-2 {$current == $solution ? "border-green-500" : "border-black"}">
    <button class="w-full h-full {$current == $solution ? "text-green-500" : $current[i] != $solution[i] && $current[i] != "-" ? "bg-red-200 text-red-500" : $activeIndex == i ? "bg-blue-200" : ""}" on:click={makeFieldActive}> {digit}  </button>
</div>

<style>
</style>
  