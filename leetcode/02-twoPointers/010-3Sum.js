var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a - b);
    let res = [];

    for(let i = 0; i < sortedNums.length - 2; i++){
        if(i > 0 && sortedNums[i] === sortedNums[i - 1]){
            continue;
        }

    let l = i + 1; 
    let r = sortedNums.length - 1;

    while(l < r){
        let sum = sortedNums[i] + sortedNums[l] + sortedNums[r];

        if(sum === 0 ){
            res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
            l++;
            r--;
            while(l < r && sortedNums[l] === sortedNums[l -1]){
                l++;
            }
        }
        else if(sum > 0){
            r--;
        }else if(sum < 0){
            l++
        }
      }
    }
    return res
};

console.log(threeSum([-1,0,1,2,-1,-4]))
