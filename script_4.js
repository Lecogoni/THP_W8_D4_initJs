const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


let result = []
for(let i=0; i < entrepreneurs.length; i++) {
	if(entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
		result.push(entrepreneurs[i])
	}
}
console.log(`Liste filtrée des entrepreurs nés dans les années 70`)
console.log(result)

console.log(``)
console.log(`----------`)
console.log(`Array d'objet Prénom Nom`)

arrayNew = []
for(let i=0; i < entrepreneurs.length; i++) {
  delete entrepreneurs[i].year;
  arrayNew.push(entrepreneurs[i]);
}

console.log(arrayNew)

console.log(``)
console.log(`----------`)
console.log(`Array de Prénom Nom`)

arrayName = []
for(let i=0; i < entrepreneurs.length; i++) {
  let name =  `${entrepreneurs[i].first} ${entrepreneurs[i].last}`;
  arrayName.push(name);
}

console.log(arrayName)

console.log(``)
console.log(`----------`)
console.log(`Age de chaque entrepreneur`)

for(let i=0; i < entrepreneurs.length; i++) {
	let entrepAge = `${entrepreneurs[i].first} ${entrepreneurs[i].last} aurait ${2020 - entrepreneurs[i].year} ans`;
  console.log(entrepAge);
}

console.log(``)
console.log(`----------`)
console.log(`Tri Alpha sur last`)

console.log(entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1))

