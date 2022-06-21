var elForm = document.querySelector('.form')
var elInput = document.querySelector('.input')
var elList = document.querySelector('.list')
var elBtn = document.querySelector('.btn')
var todos = [];
var record = new webkitSpeechRecognition()
elForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  elInputVal = elInput.value
  elInput.value = '';
  elList.innerHTML = ''
  todos.push ({
    value:elInputVal,
  });
  for (var i = 0 ; i < todos.length; i++){
    var newItem = document.createElement('li');
    newItem.textContent = todos[i].value;
    elList.appendChild(newItem);
  }
});

record.lang = 'uz-UZ';
elBtn.addEventListener('click', function(){
  record.start();
})
  record.onresult = function(evt){
    todos.push ({
      value: evt.results[0][0].transcript,
    });
    var newItem = document.createElement('li');
    newItem.textContent  = evt.results[0][0].transcript;
    elList.appendChild(newItem);
  }
  record.onerror = function(){
    var newItem = document.createElement('li');
    newItem.textContent  = evt.results[0][0].transcript;
    elList.appendChild(newItem);
  }
