var partition = function(s) {
    let res = [];
    let curr = [];
    let start = 0; 

    function isPalindrome(str) {
    return str === str.split("").reverse().join("");
    }

    function backtrack(start){
        if(start === s.length){
            res.push([...curr]);
            return;
        }

        let string = "";
        for(let i = start; i < s.length; i++){
            string += s[i];
            start++;
            
            if(isPalindrome(string)){
                curr.push(string)

                backtrack(start);

                curr.pop();
            }
        }
    }

    backtrack(0);

    return res;
};

console.log(partition("aab"));