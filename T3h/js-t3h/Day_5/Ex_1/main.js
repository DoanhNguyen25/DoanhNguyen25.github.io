const name = prompt('Mời bạn nhập tên');
const age = prompt('Mời bạn nhập tuổi');
const showName = document.getElementsByTagName('span')[0];
const showAge = document.getElementsByTagName('span')[1];
showName.innerText = name;
showAge.innerText = age;
