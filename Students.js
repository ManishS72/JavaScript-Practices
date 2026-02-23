
let students = [
    {
    name : "Manish",
    marks : 6.3,
    },

    {
        name : "Alok",
        marks : 63,
    },

    {
        name : "Amarjeet",
        marks : 67,
    }
];

let gpa = students.map((el)=>{
    return marks/10;
});