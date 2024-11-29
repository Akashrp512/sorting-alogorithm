function sortByKey<T>(arr: T[], key: keyof T): T[] {
    const n = arr.length;
    let swapped: boolean;
     console.log(n,"n===>")
    // Iterate through the array to perform the sorting
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
  console.log(`i value : ${i}`);
        for (let j = 0; j < n - 1 - i; j++) {
          console.log(`J value : ${j}`);
            const valueA = arr[j][key];
            const valueB = arr[j + 1][key];
            console.log(`valueA: ${valueA} and valueB : ${valueB}`);
            // Compare the values based on the specified key
            if (valueA > valueB) {
              console.log('Yes ${valueA} is greater than ${valueB} and Swapping');
                // Swap the elements if valueA is greater than valueB
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage
const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Jack', age: 30 },
];


const sortedByAge = sortByKey(data, 'age');
console.log(sortedByAge);
