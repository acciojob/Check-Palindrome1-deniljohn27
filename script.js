// complete the given function

function palindrome(str){
	let str1=str.toLowerCase();
	let i=0,j=str1.length-1;
	while(i<j){
		if(str1[i]!=str1[j]){
			return false;
		}
		i++;
		j--;
	}
}
module.exports = palindrome
