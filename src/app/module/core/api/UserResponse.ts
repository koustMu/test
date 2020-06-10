import {BaseResponse} from './response.interface';

export interface ProfilePicture {
  id: string;
  name: string;
  url: string;
}

export interface UserResponse extends BaseResponse{
  city: string;
  country: string;
  email: string;
  firstName: string;
  phoneNumber: string;
  profilePicture: ProfilePicture;
  lastName: string;
  totalCartProducts: number;
}
