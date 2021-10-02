export type Data = {
  energy: number;
  experience: number;
};

export interface StorageHandlerInterface {
  set(data: Data): Promise<void>;

  get(): Promise<unknown>;
}
