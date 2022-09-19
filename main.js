document.querySelector("form").addEventListener("submit", addComment);
document.getElementById('input-checked').addEventListener('change', emailVisibility)

function emailVisibility(){
    let checkBox = document.getElementById("input-checked");
    let x = document.getElementById("input-email");
  if (checkBox.checked == true){
    x.style.display = "inline";
  } else {
     x.style.display = "none";
  }
}
function addComment(event) {
    event.preventDefault();
    let commentList = document.getElementById('comments-list');
    let newListEl = document.createElement('li');
    let inputText = event.target.elements.text.value;
	newListEl.innerHTML = inputText;
	commentList.appendChild(newListEl);
	inputText.value = '';
	let inputChecked = event.target.elements.checkbox.checked;
	if (inputChecked == true) {
	    let email = event.target.elements.email.value;
	    alert('Ačiū už klausimą atsakymą gausite el. paštu: '+email)
	}

}


