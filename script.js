// complete the given function

function palindrome(string){
	// let str1=str.toLowerCase();
	// let i=0,j=str1.length-1;
	// while(i<j){
	// 	if(str1[i]!=str1[j]){
	// 		return false;
	// 	}
	// 	i++;
	// 	j--;
	// }
	    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
	return true;
}
module.exports = palindrome
