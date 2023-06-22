import { TCategory, TCreateUser, TEvent } from '@/app/common/types/commonTypes';

export interface InitialState {
    loading: boolean;
    error: boolean;
    errorMessage?: string;
}

export interface CategoriesState extends InitialState {
    categories: TCategory[];
}

export interface eventsState extends InitialState {
    events: TEvent[];
}

export interface CreateUserState extends InitialState {
    user: TCreateUser | null;
}
export interface AuthData {
    id: number;
    name: string;
    email: string;
    isOrganizator: boolean;
}

export interface AuthUserState extends InitialState {
    userData: AuthData | null;
    token: string | null;
}
