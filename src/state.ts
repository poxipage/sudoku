import { state, type State } from "poxi";
import { getSudoku } from 'sudoku-gen';

type Schema = { puzzle: string; current: string; solution: string; difficulty: string; activeIndex: number; };
export const getState = () => state<Schema>();
export const getPuzzle = () => getState().get("puzzle");
export const getCurrent = () => getState().get("current");
export const getSolution = () => getState().get("solution");
export const getActiveIndex = () => getState().get("activeIndex");


export function onCreate(state: State<Schema>) {
  const sudoku = getSudoku("easy")
  state.set({
    puzzle: sudoku.puzzle,
    current: sudoku.puzzle,
    solution: sudoku.solution,
    difficulty: sudoku.difficulty,
    activeIndex: -1,
  });
}
