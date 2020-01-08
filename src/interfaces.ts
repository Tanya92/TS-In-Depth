import {Category} from "./enums";

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;//(reason: string) => void;
}

interface DamageLogger {
    (string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
    numBooksPublished: number;
}

interface Librarian extends Person{
    department: string;
    assistCustomer: (castName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibNgrCallback {
    (err: Error, titles: string[]): void;
}
export { Book, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem, LibNgrCallback };
