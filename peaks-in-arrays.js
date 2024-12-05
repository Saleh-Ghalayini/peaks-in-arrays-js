function find_peaks(array) {
    let peaks = [];

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
            peaks.push(array[i]);
        }
    }
    return peaks;
}

const input = prompt("Enter the series of numbers with space in between");
const numbers = input.split(" ").map(Number);

const peaks = find_peaks(numbers);

console.log("Peaks: " + peaks);
