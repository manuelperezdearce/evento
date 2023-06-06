import { TCategory, TEvent } from '@/app/common/types/commonTypes';

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
