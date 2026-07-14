nums=[2,7,8,12,45];
let currentNumber = 0;
let targetNumber=9;
let requiredNumber =0;
for(let i=0; i<nums.length;i++){
        let  currentNumber = nums[i];
        for(let j=0;j<nums.length;j++){
            console.log(currentNumber)
             if(nums[j]==targetNumber-currentNumber){
                requiredNumber=j;
                break
        }
        
        }

    }
    
console.log(requiredNumber);
