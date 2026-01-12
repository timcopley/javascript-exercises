const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const personAge = (person.yearOfDeath || 2026) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || 2026) - oldest.yearOfBirth;
        if (personAge > oldestAge) {
            oldest = person;
        }
        return oldest
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
