class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res=new Set()
        nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++)
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k]===0){
                        const arr=[nums[i],nums[j],nums[k]]
                        res.add(JSON.stringify(arr))
                        // if(!res.some((innerArray)=>innerArray.
                        //     includes(nums[i])&&innerArray.includes(nums[j])
                        //             &&innerArray.includes(nums[k])))
                            // res.push(arr)   
                    }
                }
        }
        return Array.from(res).map(item=>JSON.parse(item))

    }
}
