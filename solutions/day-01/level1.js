const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

// Declare an empty array;
const arr1 = Array();
// Declare an array with more than 5 number of elements
const arr2 = Array(6);
// Find the length of your array
console.log(countries.length);
// Get the first item, the middle item and the last item of the array
console.log(
    countries[0],
    countries[Math.floor(countries.length - 1)],
    countries[countries.length]
);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    1,
    2,
    5,
    "help",
    {
        "I": "need",
        "somebody": "!"
    },
];
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
]
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(
    itCompanies[0],
    itCompanies[Math.floor(itCompanies.length - 1)],
    itCompanies[itCompanies.length]
);
// Print out each company
itCompanies.forEach((company) => {
    console.log(company)
});
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company) => {
    const com = company.charAt(0).toUpperCase() + company.slice(1);
    console.log(com)
});
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
    `${itCompanies.slice(0,itCompanies.length - 2).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
);
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const comp = "Facebook";
itCompanies.indexOf(comp) != -1
    ? console.log(comp)
    : console.log(`${comp} is not found`)
;
// Filter out companies which have more than one 'o' without the filter method
const itCmp = [];
const chr = 'o'
itCompanies.forEach((company) => {
    const c = company.indexOf(chr);
    if (c != company.lastIndexOf(chr) && c != -1) {
        itCmp.push(company)
    };
});
// Sort the array using sort() method
itCompanies.sort();
// Reverse the array using reverse() method
itCompanies.reverse();
// Slice out the first 3 companies from the array
itCompanies.slice(0, 4)
// Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length - 3)
// Slice out the middle IT company or companies from the array
itCompanies.length % 2 == 0
    ? itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
    : itCompanies.slice(Math.floor(itCompanies.length / 2) + 1)
;
// Remove the first IT company from the array
itCompanies.shift();
// Remove the middle IT company or companies from the array
itCompanies.length % 2 == 0
    ? itCompanies.splice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1)
    : itCompanies.splice(Math.floor(itCompanies.length / 2) + 1)
;
// Remove the last IT company from the array
itCompanies.pop();
// Remove all IT companies
// itCompanies = Array(itCompanies.length);