function* myGenerator(i) {
  while (i < 3) {
    yield i++;
  }
}

const myIterator = myGenerator(0);

function extractValueandDone(iterator) {
  const { value, done } = iterator.next();

  return `Value: ${value}, Done: ${done}`;
}

console.log(extractValueandDone(myIterator));
console.log(extractValueandDone(myIterator));
console.log(extractValueandDone(myIterator));
console.log(extractValueandDone(myIterator));

/******************************************/
let fibonacci = function*(numbers) {
  let pre = 0,
    cur = 1;
  while (numbers-- > 0) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
};

for (let n of fibonacci(10)) console.log(n);
/******************************************/

function makeAsync(text, after) {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), after);
  });
}

function genericAsync(procedure, ...params) {
  let iterator = procedure(...params);
  return new Promise((resolve, reject) => {
    function loop(value) {
      let result;
      try {
        result = iterator.next(value);
      } catch (err) {
        reject(err);
      }

      if (result.done) {
        resolve(result.value);
      } else if (
        typeof result.value === 'object' &&
        typeof result.value.then === 'function'
      )
        result.value.then(
          value => {
            loop(value);
          },
          err => {
            reject(err);
          }
        );
      else loop(result.value);
    }

    loop();
  });
}

//  application-specific asynchronous procedure
const result = genericAsync(function*(greeting) {
  let foo = yield makeAsync('foo', 300);
  let bar = yield makeAsync('bar', 200);
  let baz = yield makeAsync('baz', 100);
  return `${greeting} ${foo} ${bar} ${baz}`;
}, 'Hello');

result.then(msg => {
  console.log('RESULT:', msg); // "Hello foo bar baz"
});
