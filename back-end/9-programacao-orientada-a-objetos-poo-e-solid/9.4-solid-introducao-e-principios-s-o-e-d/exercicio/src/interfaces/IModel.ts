export interface IModelReader<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T>;
}

export interface IModelWriter<T> {
  create(arg: Omit<T, 'id'>): Promise<T>;
  update(arg: T): Promise<T>;
}

export interface IModelDelete {
  removeById(id: string): Promise<boolean>;
}

export interface IModel<T> extends IModelReader<T>, IModelWriter<T>, IModelDelete {}
