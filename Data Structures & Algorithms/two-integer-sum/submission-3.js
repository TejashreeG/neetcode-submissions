class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let i=0;i<nums.length;i++){
        //     for(let j=0;j<nums.length;j++){
        //             if(i!==j && nums[i]+nums[j]===target)
        //                 return [i,j]  
        //     }
        // }
        // return 0

        let mapComp=new Map()
        for(let i=0;i<nums.length;i++){
            let complement=target-nums[i]
            if(mapComp.has(complement))
                return [mapComp.get(complement),i]
            mapComp.set(nums[i],i)
        }
    }
}
