import api from '../../network/RestAPI';
import { URI } from '../../network/uri.constants';

export type UserLoginParams = {
  email: string;
  password: string;
  registration_id?: string;
};
export type UserLoginResponse = {
  accessToken?: string;
  avatar_url?: string | null;
  email?: string;
  id?: number;
  is_social?: boolean;
  nickname?: string;
  refreshToken?: string;
  sign_in_count?: number;
  updateStep?: number;
  user_code?: string;
  confirmation_code?: string;
  error?: {
    code?: any;
  } | null;
};

export const login = async (params: UserLoginParams): Promise<UserLoginResponse> => {
  const { data } = await api.post<UserLoginResponse>(URI.LOGIN, params);
  return data;
};
