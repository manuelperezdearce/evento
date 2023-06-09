import { TCategory, TCreateUser, TEvent, TUser } from '@/app/common/types/commonTypes';

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

export interface AuthUserState extends InitialState {
    user: TUser | null;
}
