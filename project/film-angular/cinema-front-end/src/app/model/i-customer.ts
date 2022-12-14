import {IUser} from './IUser';
import {ICustomerType} from './i-customer-type';


export interface ICustomer {
  id?: number;
  name?: string;
  dayOfBirth?: string;
  gender?: number;
  idCard?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
  username?: IUser;
  customerType?: ICustomerType;
}
