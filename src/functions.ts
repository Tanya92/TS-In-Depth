import { BookOrUndefined, BookProperties } from "./types";
import { Category } from "./enums";
import {Book, LibNgrCallback} from "./interfaces";

export function getAllBooks(): readonly Book[] {
    const books:readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.Angular
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
            category: Category.CSS
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.TypeScript
        }
    ];
    return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()):void {
    const numberOfBooks:number = books.length;
    let title: string;

    for (const book of books) {
        if ((book.available)) {
            title  = book.title;
            break;
        }
    }

    console.log(`Total books:  ${numberOfBooks}`);
    console.log(`First available Book:  ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    console.log(`getting books in category ${Category[category]}`)

    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        const bookAsAny = book as any;

        if (bookAsAny.category === category) {
            titles.push(bookAsAny.title)
        }
    }
    return titles;
}

export function logBookTitles(titles: string[]):void {
    for (const title of titles) {
        console.log(title);
    }
}

export function getBookAuthorOfIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];

    return [title, author];
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

// export function calcTotalPages():bigint {
//   const data = <const>[
//       { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//       { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//       { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
//   ];
//
//   let result = data.reduce((acc: bigint, obj: any) => {
//     return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook)
//   },0n);
//
//   return result;
// }

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id)
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`
}

export function createCustomer(name: string, age?: number, city?: string):void {
    console.log(`Customer name: ${name}`)
    if (age) {
        console.log(`Customer age: ${age}`)
    }
    if (city) {
        console.log(`Customer city: ${city}`)
    }
}

export function checkoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`Checking out books for ${customer}`)

    const titles: string[] = [];

    for (const id of booksIDs) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title)
        }
    }

    return titles;
}

export function getTitles(author: string):string[]
export function getTitles(available: boolean):string[]
export function getTitles(id: number, available: boolean):string[]
export function getTitles(...args: any[]):string[] {
    const books = getAllBooks();

    if (args.length === 0) {
        return [];
    } else if (args.length === 1) {
        const arg = args[0];

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title)
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title)
        }
    } else if (args.length === 2) {
        const id = args[0];
        const available = args[1];

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title)
        }
    }
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string')
    }
}

export function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibNgrCallback) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles)
            } else {
                throw new Error('no books found')
            }
        }
        catch(error) {
            callback(error, null)
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log( `Error message: ${err.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
                if (titles.length > 0) {
                    resolve(titles)
                } else {
                    reject('no books found')
                }
        }, 2000)
    })
    return p;
}

export async function logSearchResults(category: Category): Promise<void> {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles);
}
