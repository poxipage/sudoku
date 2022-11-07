<script lang="ts">
  import { getActiveIndex, getCurrent, getPuzzle, getSolution } from "./state";
  import Box from "./Box.svelte";

  const puzzle = getPuzzle();
  const current = getCurrent();
  const solution = getSolution();
  const activeIndex = getActiveIndex();
  let lastMove = []

  const setActive = (event) => {
    $activeIndex = event.detail.value
  }

  const enterDigit = (digit: number) => {
    if ($activeIndex != -1 && $puzzle[$activeIndex] == "-" && $current != $solution) {
      $current = $current.substring(0, $activeIndex) + digit.toString() + $current.substring($activeIndex + 1)
      if (lastMove[-1] != $activeIndex) lastMove.push($activeIndex)
    }
  }

  const undo = () => {
    if (lastMove.length) {
      const undo = lastMove.pop()
      $current = $current.substring(0, undo) + "-" + $current.substring(undo + 1)
    }
  }
</script>

<div class="board grid bg-slate-50 border-t-4 border-l-4 {$current == $solution ? "border-green-500" : "border-black"} grid-cols-3 grid-rows-3">
  {#each [0,1,2,3,4,5,6,7,8] as index}
    <Box on:active={setActive} indexes = {[index*3 + 18*Math.floor(index/3), index*3 + 18*Math.floor(index/3)+1, index*3 + 18*Math.floor(index/3)+2, index*3 + 18*Math.floor(index/3)+9, index*3 + 18*Math.floor(index/3)+10,index*3 + 18*Math.floor(index/3)+11, index*3 + 18*Math.floor(index/3)+18, index*3 + 18*Math.floor(index/3)+19, index*3 + 18*Math.floor(index/3)+20]} />
  {/each}
</div>
<div class="buttons justify-center mt-2 gap-0.5 flex w-full max-w-lg">
  {#each [1,2,3,4,5,6,7,8, 9] as digit}
    <button class="w-8 h-8 border-2 btn-primary border-primary-content rounded" on:click={() => enterDigit(digit)}>{digit}</button>
  {/each}
</div>
<div class="buttons justify-center mt-2 flex w-full max-w-lg">
  <button class="w-12 h-8 border-2 btn-primary border-primary-content rounded" on:click={undo}>Undo</button>
</div>

<style>
  .board {
    height: calc(100% -  5rem);
  }

  .buttons {
    height: 2rem;
  }
</style>
