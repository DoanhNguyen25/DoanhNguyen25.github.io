let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do THi thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen nhat"
    }
]

function titleCase(xx) {
    xx = xx.toLowerCase().trim()
    for (let i = 0; i < xx.length; i++) {
        if (i == 0 || xx[i - 1] == " ") {
            xx = xx.slice(0, i) + xx[i].toUpperCase() + xx.slice(i + 1)
        }
    }
    return xx;
}
for (let i = 0; i < students.length; i++) {
    students[i].firstName = titleCase(students[i].firstName);
    students[i]['lastName'] = titleCase(students[i].lastName);
}
for (let i = 0; i < students.length; i++) {
    if ((students[i].firstName.search('a') !== -1  || students[i].firstName.search('A') !== -1) && students[i].firstName.length > 3) {
        console.log(students[i]);
    }
}