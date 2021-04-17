import { ICreateAppInput, IModels, IUser } from '../../interfaces'

export default {
  Query: {
    getUsers: (
      _: object,
      _args: object,
      { models }: { models: IModels }
    ): IUser[] => models.User.findAll()
  },
  Mutation: {
    createUser: (
      _: object,
      { input }: { input: ICreateAppInput },
      { models }: { models: IModels }
    ): IUser => models.User.create({ ...input })
  }
}
