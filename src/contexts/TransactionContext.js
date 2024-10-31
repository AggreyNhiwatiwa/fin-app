import { createContext } from "react";

/*
The Context API is used here to make the list of transactions and its associated state 
globally accessible, as there are several components that need access to these,
thus excessive prop-drilling is avoided
*/

export const TransactionContext = createContext({
  //Setting defaults to an empty array and empty method
  transactions: [],
  setTransactions: () => {},
  currentTransaction: {},
  setCurrentTransaction: () => {},
});
