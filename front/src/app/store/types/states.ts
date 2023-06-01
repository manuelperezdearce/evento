export interface InitialState {
    loading: boolean;
    error: boolean;
    errorMessage?: string;
}

export interface CategoriesState extends InitialState {
    categories: TCategory[];
}

export type TCategory = {
    id: number;
    name: string;
};
