function update_text(){
  var user_text1 = document.getElementById("user_text1");
  var user_text2 = document.getElementById("user_text2");
  var meme_text1 = document.getElementById("meme_text1");
  var meme_text2 = document.getElementById("meme_text2");
  meme_text1.innerHTML = user_text1.value;
  meme_text2.innerHTML = user_text2.value;
}

function update_image(){
  var img = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  img.src = window.URL.createObjectURL(file);
}