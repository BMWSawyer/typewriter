const sentence = "hello there from lighthouse labs";
let t = 0;

for (const char of sentence) {
  for (let i = 0; i < char.length; i++) {
    setTimeout(() => process.stdout.write(char), t);
    t = t + 50;
  }
}

setTimeout(() => process.stdout.write('\n'), t );