<script lang="ts">
    import { getSudoku } from 'sudoku-gen';
    import type { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
    import { getState } from './state';

    const state = getState()

    let difficulty: Difficulty = "easy"

    const newGame = () => {
        const sudoku = getSudoku(difficulty)
        $state.puzzle = sudoku.puzzle
        $state.current = sudoku.puzzle
        $state.solution = sudoku.solution
        $state.difficulty = sudoku.difficulty
        $state.activeIndex = -1
    }
</script>

<div>
    Select difficulty
    <select bind:value={difficulty} class="select w-full max-w-xs">
        <option selected value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="expert">Expert</option>
    </select>
    <button class="btn mt-4 justify-self-center" on:click={newGame}>New game</button>
</div>
