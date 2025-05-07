<h1 align='center' >Next Level Web Development - Assignment 1</h1>

<h4 style="font-size: 20px;">To run this code:</h4>

1. Clone this repository:

```bash
git clone https://github.com/MohammadNaiem65/level-2-assignment-1.git
```

2. Install node modules:

```bash
pnpm install
```

3. Install node modules:

```bash
pnpm run dev
```

After editing anything, the dev mode will automatically reload as I implemented hot reload using `ts-node-dev` package.

<h4 style="font-size: 20px; margin-top: 32px;">The Folder Structure of this code is given below:</h4>

```
.
├── src/
│   ├── assets/
│   │   └── interface-vs-type.png
│   └── index.ts
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

<h1 align='center' style="margin-top: 3rem" >Questions ans Answers</h1>

<h4 style="font-size: 24px; margin-top: 30px;">1. What are some differences between interfaces and types in TypeScript?</h4>

Interface and Types are two main ways to predefine types in TypeScript. But the key difference of them is, we can only create Object and Array (which is complex to create) type using Interface whereas we can define any type alias of data types available in TypeScript using types.

Another difference is, though types are easy to write or define but interface wins when we take the competition on step farther by merging multiple type alias or interfaces. It turns out that, it's easier for Typescript to compile the hierarchial relationship between interfaces while merging multiple interfaces than type alias.

An example of this can be:

```ts
type Foo = {
  name: string;
};

type Bar = {
  name: number;
};

type Result = Foo & Bar;

type name = Result["name"];
```

If we write this code where we are merging type `Foo` and `Bar`, the type of the `name` key should be both `string` and `number` which is impossible. So we should get and error here.

But if we write this code in the editor, the code not only just runs but the type of the `name` key get infers as `never` which is not expected behavior.

But if we write the same code using `interface`, we will get an error that this this type of merging is not accepted.

![Interface vs Type](/src/assets/interface-vs-type.png)

What happens here is that, while merging `type  Foo` and `type Bar`, the compilation of these 2 was very complex for TypeScript and we were not getting proper suggestion or warning. But the compilation of the merged `interface Foo` and `interface Bar` was not that complex and we were getting proper TypeScript behavior.

<h4 style="font-size: 24px; margin-top: 30px;">2. What is the use of the `keyof` keyword in TypeScript? Provide an example.</h4>

In TypeScript, the `keyof` operator is used to take an `object` type and return a union (`|`) type of all the keys of that object as literal type. An example of this can be:

```ts
type Product = {
  name: string;
  email: string;
  age: number;
  isSubscribed: boolean;
};

type P = keyof Product;
```

Here the type of `P` will be `"name" | "email" | "age" | "isSubscribed"`. The generated types can be literal type of string or number.
