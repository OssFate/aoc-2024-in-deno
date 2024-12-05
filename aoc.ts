import { days } from "./day/days.ts";

const day = Deno.args[0];
if (day == undefined) {
  console.error(
    `Missing day argument, please use like "deno task day <day you want to run>"`,
  );
  Deno.exit();
}

const lowerDay = day.toLowerCase();
if (!(lowerDay in days)) {
  console.error(`"${day}" is a missing day for now...`);
  Deno.exit();
}

const oneSolution = await days[lowerDay].one();
const twoSolution = await days[lowerDay].two();

console.log(`Running day: ${day}`);
console.log(`Day ${day} first problem: ${oneSolution}`);
console.log(`Day ${day} second problem: ${twoSolution}`);
