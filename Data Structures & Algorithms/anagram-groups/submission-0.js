class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res={}
        for(let val of strs){
            const sortedStr=val.split('').sort().join('')
            if(!res[sortedStr])
                res[sortedStr]=[]
            res[sortedStr].push(val)
        }
        return Object.values(res)
    }
}
