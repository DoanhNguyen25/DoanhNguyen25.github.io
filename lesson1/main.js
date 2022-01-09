// variable
const members = document.getElementsByClassName("member");
const selectedName = document.getElementById("name--item");

const showNameByIndex = (index) => {
  switch (index) {
    case 0:
      return "Pain";
    case 1:
      return "Itachi";
    case 2:
      return "Kisame";
    case 3:
      return "Tobi";
    default:
      return;
  }
};

[].forEach.call(members, (member, index) => {
    member.addEventListener('click', () => {
        member.className += "active"
        selectedName.innerText = showNameByIndex(index)
    })
})
