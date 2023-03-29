import {useState} from "react";

export function Wallet() {
    const [transactions, setTransactions] = useState([]);

    function handleDepositClick() {
        setTransactions([...transactions, transactions.length + 1]);
    }

    function handleUndoClick() {
        setTransactions(transactions.slice(0,transactions.length -1))
    }

    return <>
        <button onClick={handleDepositClick}>Deposit</button>
        <button onClick={handleUndoClick}>Undo</button>
        <ul>
            {transactions.map(
                (transaction, index) => <li key={index}>{transaction}</li>
            )}
        </ul>
    </>;
}
