var findEvenNumbers = function(digits) {
    const freq = new Array(10).fill(0);
    const list = [];

for (const num of digits) {
        freq[num]++;
}

for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= 8; k += 2) {
            freq[i]--;
            freq[j]--;
            freq[k]--;

         if (
             freq[i] >= 0 &&
             freq[j] >= 0 &&
             freq[k] >= 0
                ) {
                    const num = i * 100 + j * 10 + k;
                    list.push(num);
                }

                freq[i]++;
                freq[j]++;
                freq[k]++;
            }
        }
    }

    return list;
};

console.log(findEvenNumbers([2, 2, 8, 8, 2]));