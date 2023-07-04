const timer = (input) => {
  if (input === undefined) return;

  for (const num of input) {

    if (num < 0 || isNaN(num))
      continue;

    const time = Number(num) * 1000;
    setTimeout(() => process.stdout.write('.'), time);
  }
};

const input = process.argv.slice(2);
timer(input);