require("./main.css");
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
