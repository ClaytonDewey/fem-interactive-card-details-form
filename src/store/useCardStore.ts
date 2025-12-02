import { create } from 'zustand';

interface CardState {
  cardHolder: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
}

interface CardActions {
  setCardHolder: (name: string) => void;
  setCardNumber: (number: string) => void;
  setExpMonth: (month: string) => void;
  setExpYear: (year: string) => void;
  setCvc: (cvc: string) => void;
  reset: () => void;
}

export const useCardStore = create<CardState & CardActions>((set) => ({
  cardHolder: 'Jane Appleseed',
  cardNumber: '0000000000000000',
  expMonth: '00',
  expYear: '00',
  cvc: '000',

  setCardHolder: (name: string) => set({ cardHolder: name }),
  setCardNumber: (number: string) => set({ cardNumber: number }),
  setExpMonth: (month: string) => set({ expMonth: month }),
  setExpYear: (year: string) => set({ expYear: year }),
  setCvc: (cvc: string) => set({ cvc }),
  reset: () =>
    set({
      cardHolder: 'Jane Appleseed',
      cardNumber: '0000000000000000',
      expMonth: '00',
      expYear: '00',
      cvc: '000',
    }),
}));
