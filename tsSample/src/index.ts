const message: string = "Hello, World2 next";
console.log(message);

const greeting: string = "Hello, ";
// コメント
const text: string = greeting + "world!";
console.log(text);

const i: number = 9;
if (i < 10) {
    console.log("10未満");
}

const a: string = "hello",
      b: string = "world";
const あいう: number = 123;

// const greeting2 = "Hello, ";
let greeting2: string;
greeting2 = 'Hello, ';
greeting2 = greeting2 + "world";
console.log(greeting2);


const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = (width1 + width2) * height / 2;
console.log(area);

const binary = 0b1010;
const octal = 0o755;
const hexadecimal = 0xff;
console.log(binary, octal, hexadecimal);

const big = 1e8;
const small = 4e-5;
console.log(big, small);

const million = 1_000_000;
console.log(million);

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

const result = 5n / 2n;
console.log(result);

const str1: string = "hell";
const str2: string = "wol";
const mess: string = `Hello
world`;
console.log(`${str1}, ${str2}`);
console.log(mess);

console.log(`123 + 456 = ${123 + 456}`);

console.log("Hello \u{796d} \\world/");

const no: boolean = false;
const yes: boolean = true;
console.log(yes, no);

const val1: null = null;
const val2: undefined = undefined;
console.log(val1, val2);


