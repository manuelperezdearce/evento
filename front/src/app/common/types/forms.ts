export type TEventForm = {
  name: string;
  category: string | null;
  direction: string;
  description: string;
  time: string;
  image: File | null;
  backgroundImage: File | null;
  startDate: string;
  endDate: string;
  isFree: boolean;
  onlyAdults: boolean;
  price: number;
};
