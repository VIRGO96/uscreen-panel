import UserRepository from './UserRepository';
import OrderRepository from './OrderRepository';

const repositories = {
  user_repository: UserRepository,
  order_repository:OrderRepository

};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
};
