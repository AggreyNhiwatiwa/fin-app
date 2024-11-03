/*
Aggrey Nhiwatiwa
1152301
INFO-6132 
Lab 2
*/

/*
The Context API is used here to make the list of transactions, current transaction and their
associated states globally accessible (depending on the scope of its provider), as there are 
several components that need access to these, preventing excessive prop-drilling
*/

import { createContext } from "react";

export const TransactionContext = createContext({
  transactions: [],
  setTransactions: () => {},
  currentTransaction: {},
  setCurrentTransaction: () => {},
});
