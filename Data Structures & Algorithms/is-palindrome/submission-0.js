class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str=s.replace(/\s/g,'')
        str=str.toLowerCase()
        str=str.replace(/[^a-zA-Z0-9]/g,'')
        if(str===str.split('').reverse().join(''))
            return true
        return false
    }
}
