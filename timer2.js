const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8'); // interpret input as a string


// "data" event triggers whenever user inputs data
stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "b") {
    setTimeout(() => stdout.write("\x07"));
  }

  // test if key === num betwn 1 to 9;
  if (/^[1-9]$/.test(key)) {
    console.log(`setting time for ${key}...`);

    const time = Number(key) * 1000;
    setTimeout(() => stdout.write("\x07"), time);
  }



});