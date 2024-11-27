const findTheOldest = function(people) {

    let sortedPeople = people.map((item)=>{ 
        if('yearOfDeath' in item) {
        item.age = item.yearOfDeath - item.yearOfBirth;
        } else {
          item.age = new Date().getFullYear() - item.yearOfBirth;
        }
        return item
    }).sort((a,b)=> {
        return b.age - a.age
    });
    console.log(sortedPeople);
    return sortedPeople[0];

};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
