class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map=new Map()
        for(let i=0;i<nums.length;i++){   
            // if(map.has(nums[i]))
                map.set(nums[i],(map.get(nums[i])||0)+1)
        }
        const result=[...map.entries()].sort((a,b)=>b[1]-a[1])
            .map((value)=>value[0])
            .slice(0,k)
        return result
    }
}
