import { type } from 'os';
import construct = Reflect.construct;
import { ReferenceItem, UniversityLibrarian } from "./classes";
import {BookOrUndefined, BookProperties} from "./types";
import {Category} from "./enums";
import {Book, Logger, Person, Author, Librarian} from "./interfaces";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}
//=================================================================================================================



class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem():void {
   super.printItem();
   console.log(`Edition: ${this.edition} (${this.year})`)
  }

  printCitation():void {
    console.log(`${this.title} - ${this.year}`);
  }
}


/* Task 02.01*/
//logFirstAvailable(getAllBooks());

//const titles = getBookTitlesByCategory(Category.JavaScript);
//logBookTitles(titles)

// const result = getBookAuthorOfIndex(1);
// console.log(result)

//console.log(calcTotalPages());

/*Task 03.01*/

// const titles = getBookTitlesByCategory(Category.JavaScript)
// titles.forEach(title => console.log(title));
//
// const book = getBookById(2)
// console.log(book)


/*Task 03.02*/
// let myID: string  =createCustomerID('Ann', 10)
// console.log(myID)
//
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`
// idGenerator = createCustomerID;
// myID = idGenerator(" Tanya", 27);
// console.log(myID)

/*Task 03.03*/
// createCustomer("Ann")
// createCustomer("Ann", 20)
// createCustomer("Ann", 20, 'Moscow');

// const titles = getBookTitlesByCategory();
// console.log(titles)

// logFirstAvailable()

// const myBooks: string[] = checkoutBooks("ann", 1, 2, 4);
// console.log(myBooks)

/*Task 03.04*/
// const checkedOutBooks = getTitles(true)
// console.log(checkedOutBooks)

/*Task 03.05*/
// const title1 = bookTitleTransform(getAllBooks()[0].title)
// console.log(title1)
// const title2 = bookTitleTransform(10);
// console.log(title2)

/*Task 04.01*/

 // const myBook: Book = {
 //   id: 5,
 //   title: 'Colors, Backgrounds, and Gradients',
 //   author: 'Eric A. Meyer',
 //   available: true,
 //   category: Category.CSS,
 //   pages: 205,
 //   markDamaged: (reason:string) => console.log(`Damaged: ${reason}`),
 // };
 //
 // printBook(myBook);
 //  myBook.markDamaged('missing back cover')

/*Task 04.02*/
// let logDamage: Logger; //DamageLogger
// logDamage = (reason: string) => console.log(`Damage logger: ${reason}`);
// logDamage('something wrong')

/*Task 04.03*/
// const favouriteAuthor: Author = {
//   email: 'Anna@gmail.com',
//   name: 'Anna',
//   numBooksPublished: 10
// };
//
// const favouriteLibrarian: Librarian = {
//   name: 'Boris',
//   email: 'Boris@gmail.com',
//   department: 'Fantastic',
//   assistCustomer: (name: string) => console.log(name)
// }

/*Task 04.04*/
// const offer: any = {
//   book: {
//     title: 'Essential TypeScript'
//   }
// };
//
// console.log(offer?.magazine)

/*Task 04.05*/
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'category'));

/*Task 05.01*/
// const ref:ReferenceItem = new ReferenceItem('Super TypeScript', 2012);
// ref.printItem();
// ref.publisher = 'Popular Book Publisher';
// console.log(ref.publisher)

/*Task 05.02*/
// const refBook: Encyclopedia = new Encyclopedia('Large Book', 2019,5);
// console.log(refBook);
// console.log(refBook.printItem())

/*Task 05.03*/
// const refBook: Encyclopedia = new Encyclopedia('Large Book', 2019,5);
// console.log(refBook);
// refBook.printCitation();

/*Task 05.04*/
// const favouriteLibrarian: Librarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris');` `

/*Task 05.05*/
const personBook: PersonBook = {
  name: "Anna",
  email: "Anna@gmail.com",
  id: 1,
  title: 'Introduction to TS',
  author: 'Boris',
  available: true,
  category: Category.JavaScript
};
console.log(personBook)
