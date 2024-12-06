import { days } from "./day/days.ts";
import { toNumber } from "./utils/convert.util.ts";

const day = Deno.args[0];
if (day == undefined) {
  console.error(
    `Missing day argument, please use like "deno task day <day num you want to run>"`,
  );
  Deno.exit();
}

const numDay = toNumber(day);
if (!(numDay in days)) {
  console.error(`"${day}" is a missing day for now...`);
  Deno.exit();
}

const oneSolution = await days[numDay].one();
const twoSolution = await days[numDay].two();

console.log(`Running day: ${day}`);
console.log(`Day ${day} first problem: ${oneSolution}`);
console.log(`Day ${day} second problem: ${twoSolution}`);
