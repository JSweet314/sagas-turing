const myString = new String('This is a string!');
console.log([...myString]);

myString[Symbol.iterator] = function() {
  return {
    next: function() {
			if (this.condition < 5) {
        this.condition++;
        return {value: myString[this.condition], done: false};
      } else {
        return {done: true};
      }
    },
    condition: 0,
  };
};

console.log([...myString]);
