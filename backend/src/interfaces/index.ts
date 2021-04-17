import { App, User } from './types'

export interface IDataTypes {
  UUID: string;
  STRING: string;
  BOOLEAN: boolean;
  TEXT: string;
  INTEGER: number;
  DATE: string;
  FLOAT: number;

  UUIDV4(): string;
}

export interface IApp extends App {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateAppInput extends App {
}

export interface IUser extends User {
  id: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserInput extends User {
}

export interface IModels {
  App: any;
  User: any;
  sequelize: any;
}
