function highlight() {
    //Write your code here
let boldwords= document.querySelectorAll('strong');
	boldwords.forEach((word)=>{
		word.style.color='green';
	})

}


function return_normal() {
    //Write your code here
let boldwords=document.querySelectorAll('strong');
	boldwords.forEach((word)=>{
		word.style.color='black';
	})
    
}
