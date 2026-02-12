
// Logic error: prints wrong value (adds 5 to grade)
let students = {
    Alice: 90,
    Bob: 85,
    Charlie: 92
};

for (let name in students) {
    console.log(name + ": " + (students[name] + 5));
}
