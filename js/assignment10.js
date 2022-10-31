const json = 
{
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" :
    [
        {
            "firstName" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : "40000",
            "raiseEligable" : "true",
            "wfh" : "true"
        },
        {
            "firstName" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : "18500",
            "raiseEligable" : "true",
            "wfh" : "false"
        },
        {
            "firstName" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : "21200",
            "raiseEligable" : "false",
            "wfh" : "false"
        }
    ]
}

const newEmployee =
{
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : "25600",
    "raiseEligable" : "false",
    "wfh" : "true"
}


console.log(json);
json["employees"].push(newEmployee);
console.log(json);


//problem #4
let totalSalary = 0;

for (let i = 0; i < json["employees"].length; i++)
{
    totalSalary += Number(json["employees"][i].salary);
}

console.log('The total salary is:' + totalSalary);

//problem #5
for (let i = 0; i < json["employees"].length; i++)
{
    if (json["employees"][i].raiseEligable === "true")
    {
        json["employees"][i].salary = Number(json["employees"][i].salary) + Number(json["employees"][i].salary)*0.1;
        json["employees"][i].raiseEligable = "false";
    }
}