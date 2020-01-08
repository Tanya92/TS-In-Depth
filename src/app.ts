import {Category} from "./enums";
import {Book} from "./interfaces";
import {logSearchResults} from "./functions";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}
//=================================================================================================================

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
// const personBook: PersonBook = {
//   name: "Anna",
//   email: "Anna@gmail.com",
//   id: 1,
//   title: 'Introduction to TS',
//   author: 'Boris',
//   available: true,
//   category: Category.JavaScript
// };
// console.log(personBook)

/*Task 06.03*/
// const refBook: RefBook = new RefBook('Large Book', 2019,5);
// console.log(refBook);
// console.log(refBook.printItem());

/*Task 06.05 */
// import('./classes').then(module => {
//   const reader = new module.Reader();
//   console.log(reader)
//   reader.name = 'Anna';
//   reader.take(getAllBooks()[0])
// })

/*Task 07.01 */
const inventory: Array<Book> = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge<Book>(inventory);
// console.log(result);
// const result2 = purge([1,2,3,4,5,]);
// console.log(result2)

/*Task 07.02*/

// const bookShelf:Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook.title);
//
// const magazines: Array<Magazine> = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine.title)

/*Task 07.03*/
// bookShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag)

/*Task 07.04 */
// const book: BookRequiredFields = {
//   id: 1,
//   title: 'Refactoring TS',
//   author: 'unknown',
//   available: false,
//   category: Category.TypeScript,
//   pages: 500,
//   markDamaged: null
// };

// const book: UpdatedBook = {
//   id: 1,
//   pages: 400
// }

// const params: Parameters<createCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

/*Task 08.01 */
// const universityLibrarian = new UniversityLibrarian();

/*Task 08.02 */
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian["printLibrarian"]();
// (fLibrarian as any).printLibrarian();

 /*Task 08.03 */
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

/*Task 08.04 */
// const enc = new Encyclopedia('Title', 2019, 30);
// enc.printItem();

/*Task 08.05 */
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

/*Task 08.06 */
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name)

/*Task 08.07 */
// const enc = new Encyclopedia('Title', 2019, 30)
// enc.copies = 10;

/*task 09.01 */
// console.log('Beggining search');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);

/*Task 09.02*/
// console.log('Beggining search');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//       console.log(data)
//       return data.length;
//     })
//     .then(numOfBooks => console.log(numOfBooks))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(data => console.log(data)).catch(reason => console.log(reason));
// console.log('End')

/*Task 09.03*/
console.log('Beginning search');
logSearchResults(Category.Software).catch(reason => console.log(reason));
console.log('End');
