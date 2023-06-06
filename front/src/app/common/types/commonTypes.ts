export type TEvent = {
    name: string;
    id: number;
    category: string;
    tags: string[];
    direction: string;
    city: string;
    time: string;
    startDate: string;
    endDate: string;
    image: File;
    isFree: boolean;
    price: number;
    onlyAdults: boolean;
};

export type TCategory = {
    id: number;
    name: string;
};
