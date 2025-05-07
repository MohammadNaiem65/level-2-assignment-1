function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

class Vehicle {
  constructor(private make: string, private year: number) {}

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const mostExpensiveProduct = products.reduce(
      (prev, curr) => (prev.price >= curr.price ? prev : curr),
      { name: "", price: 0 }
    );

    return mostExpensiveProduct;
  }
}

enum Day {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

function getDayType(day: Day): string {
  if (day > 1) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}

async function squareAsync(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      reject("Error: Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(num * num);
      }, 1000);
    }
  });
}
