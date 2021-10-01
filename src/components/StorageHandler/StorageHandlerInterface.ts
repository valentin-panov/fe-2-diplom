import { Solution } from 'src/graphql.types';

export type Data = {
  energy: number;
  experience: number;
  solutions: Solution[];
};

export interface StorageHandlerInterface {
  set(data: Data): Promise<void>;
  get(): Promise<unknown>;
}
