import { ObjectLiteral, Repository, DeepPartial } from 'typeorm';

export class CrudService<T extends ObjectLiteral> {
    private repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async getAll(): Promise<T[]> {
        return this.repository.find();
    }

    async getById(id: number): Promise<T | null> {
        return this.repository.findOneBy({ id } as any);
    }


    async create(data: Partial<T>): Promise<T> {
        const entity = this.repository.create(data as DeepPartial<T>);
        return this.repository.save(entity);
    }

    async update(id: number, data: DeepPartial<T>): Promise<T | null> {
        const entity = await this.repository.findOneBy({ id } as any);
        if (!entity) {
            return null;
        }
        this.repository.merge(entity, data);
        return this.repository.save(entity);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected !== 0;
    }
}
