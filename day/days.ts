import { day_one } from "./day-one.ts";
import { day_two } from "./day-two.ts";

interface dayFunc {
  one: () => Promise<string | number>;
  two: () => Promise<string | number>;
}

export const days: Record<string, dayFunc> = {
  "one": day_one,
  "two": day_two,
};
