export interface IProduct {
  name: string;
  producer: string;
  type: string;
  id: string;
}

export interface IProductProps {
  product: IProduct;
}
export interface IUser {
  name: string;
  email: string;
  id: string;
}

export interface IUserList {
  users: IUser[];
}

export interface IProductList {
  products: IProduct[];
}

export interface ILogIn {
  login: any;
  setToken: any;
}

export interface INavbar {
  logout: any;
}

export interface IUserObject {
  user: IUser | null;
}
