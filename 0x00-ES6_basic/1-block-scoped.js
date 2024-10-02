export default function taskBlock(trueOrFalse) {
  const task = false; // use const for values that won’t change
  const task2 = true; 

  if (trueOrFalse) {
    let task = true;  // block-scoped, will not overwrite the outer 'task'
    let task2 = false; // block-scoped, will not overwrite the outer 'task2'
  }

  return [task, task2]; // returns the values from the outer scope
}
