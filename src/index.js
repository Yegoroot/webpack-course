require("babel-runtime/regenerator");
require("./index.css");
require("./index.html");
console.log("heeey1");

const funcWithPromise = (name = "one") => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${name}_project`);
    }, 1700);
  });
};

async function asyncFunc(name) {
  try {
    const res = await funcWithPromise(name);
    console.log(res);

    await console.log("---");
  } catch (error) {
    console.error(error);
  }
}

asyncFunc("_one");

/** regeneration
 *
 */

function regeneration(args) {
  const { a, b } = args;
  console.log(a, b);
}

regeneration({
  a: 1,
  b: "str"
});
