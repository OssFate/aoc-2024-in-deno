import { day_one } from "./day-one.ts";
import { day_three } from "./day-three.ts";
import { day_two } from "./day-two.ts";

interface dayFunc {
  one: () => Promise<string | number>;
  two: () => Promise<string | number>;
}

export const days: Record<number, dayFunc> = {
  1: day_one,
  2: day_two,
  3: day_three,
};
