import { Sequelize } from 'sequelize';
import { $db } from '../../config';
import { IModels } from '../interfaces';
import { hasKey } from "fogg-utils";

const {dialect, port, host, database, username, password} = $db;
const uri = `${dialect}://${username}:${password}@${host}:${port}/${database}`;

const sequelize = new Sequelize(uri);

const models: IModels = {
  App: import("./App"),
  User: import("./User"),
  sequelize,
}

Object.keys(models).forEach((modelName: string) => {
  if (hasKey(models, modelName)) {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  }
})
export default models;
