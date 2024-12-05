import { days } from "./day/days.ts";

const day = Deno.args[0];

console.log(`Running day: ${day}`);
console.log(`Day ${day} first problem: ${await days[day.toLowerCase()].one()}`);
console.log(
  `Day ${day} second problem: ${await days[day.toLowerCase()].two()}`,
);
