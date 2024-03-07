const firstName = "Ianice";
const age = 18;
const isStudent = true;

console.log(typeof firstName, firstName);
console.log(typeof age, age)
console.log(typeof isStudent, isStudent)


// TYPES composites
const languages = ["Javascript", "Python", "HTML/CSS"]
// languages.map(language => console.log(language)) 
console.log(languages)
console.log(languages[1])

const address = {
    city: "Pessac", 
    zipcode: 33600, 
    country: "France"
}
console.log(`${address.city} (${address.zipcode}), ${address.country}`)

//CONDITION 
const studentGrade = 15
const minGrade = 10
const minReTake = 9
const maxReTake = 11
if (studentGrade >= minGrade) {
    console.log("Exam réussi")
}else if(minReTake <= studentGrade < maxReTake){
    console.log("vous pouvez aller au rattrapage")
}else{
    console.log("Vous avez loupé")
}

//BOUCLE
const students = [
    "Jp", "Fred", "Marc", "Eugenie", "Claire"
]
students.map(student => console.log(student))

//function 
function addNumber (a, b){
    return a+b
}

console.log(addNumber(2,3))

const multiplyNumber = (number1, number2) => {
    return number1*number2
}  
console.log(multiplyNumber(2, 3))