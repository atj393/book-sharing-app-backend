import { AppDataSource } from '../config/database';
import { Book } from '../models/bookModel';
import { CrudService } from './crudService';

export class BookService extends CrudService<Book> {
    constructor() {
        super(AppDataSource.getRepository(Book));
    }

    // You can add entity-specific methods here, if needed
}
