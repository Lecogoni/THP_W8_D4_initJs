const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 45 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(``)
console.log(`----------`)
console.log(`Livre le plus emprunté is ?`)

let bestRent = 0
let bestRentBook

for(let i=0; i < books.length; i++) {
  
  if (books[i].rented > bestRent) {
    bestRent = books[i].rented
    bestRentBook = books[i]
  }
}

console.log(bestRentBook.title)

console.log(``)
console.log(`----------`)
console.log(`Livre le moins emprunté is ?`)

let lessRent = 0
let lessRentBook

for(let i=0; i < books.length; i++) {

  if (lessRent == 0) {
    lessRent = books[i].rented
    lessRentBook = books[i]
  }

  if (books[i].rented < lessRent) {
    lessRent = books[i].rented
    lessRentBook = books[i]
  } 

}
console.log(lessRentBook.title)


test = Math.min.apply(Math, books.map(function(book) { return book.rented ; }))
console.log(test)

console.log(``)
console.log(`----------`)
console.log(`Trouve le livre avec l'ID: 873495 ?`)
console.log(books.find(x => x.id === 873495).title)

console.log(``)
console.log(`----------`)
console.log(`Supprime le livre avec l'ID: 133712`)


for( let i = 0; i < books.length; i++){ 
  if ( books[i].id === 133712) { 
    books.splice(i, 1); 
  }
}
console.log(books)


console.log(``)
console.log(`----------`)
console.log(`Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)`)

console.log(books.sort((a, b) => (a.title > b.title) ? 1 : -1))