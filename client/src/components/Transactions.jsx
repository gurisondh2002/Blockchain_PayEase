import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import styles from './Transition.module.css'


const Transactions = () => {
  const { transactions, connectedAccount } = useContext(TransactionContext);

  return (
    <div className={`${styles.customContainer} gradient-bg-transactions`}>
      <div className={`${styles.customMainContainer}`}>
        {connectedAccount ? (
          <h3 className={`${styles.latestTransac}`}>
            Latest Transactions
          </h3>
        ) : (
          <h3 className={`${styles.latestTransac}`}>
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="overflow-x-auto mt-10">
          <table className={styles.customTable}>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Message</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {[...dummyData, ...transactions].reverse().map((transaction, index) => (
                <tr key={index} className={styles.bgColor}>
                  <td>
                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noreferrer" className={styles.customLink}>
                      {shortenAddress(transaction.addressFrom)}
                    </a>
                  </td>
                  <td>
                    <a href={`https://sepolia.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noreferrer" className={styles.customLink}>
                      {shortenAddress(transaction.addressTo)}
                    </a>
                  </td>
                  <td>{transaction.amount} ETH</td>
                  <td>{transaction.message}</td>
                  <td>{transaction.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;