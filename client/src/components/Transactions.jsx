import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import styles from './Transition.module.css'
import url from '../assets/wallet.gif'

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
        <div className={`${styles.gridContainer}`}>
          {[...dummyData, ...transactions].reverse().map((transaction, index) => (
            <div key={index} className={`${styles.gridDivcontainer}`}>
              <div className="p-6 flex-grow">
                <img
                  src={url}
                  alt="wallet"
                  // width={250}
                  height={200}
                  style={{ borderRadius: "20px" }}
                  className="h-32 md:h-34 lg:h-34 w-full object-cover rounded-b-lg"
                />
                <div className="mb-4">
                  <strong style={{ color: "white", margin: "10px" }}>From:</strong>{" "}
                  <a href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`} style={{ color: "white" }} target="_blank" rel="noreferrer" className={styles.customLink}>
                    {shortenAddress(transaction.addressFrom)}
                  </a>
                </div>
                <div className="mb-4">
                  <strong style={{ color: "white", margin: "10px" }}>To:</strong>{" "}
                  <a href={`https://sepolia.etherscan.io/address/${transaction.addressTo}`} style={{ color: "white" }} target="_blank" rel="noreferrer" className={styles.customLink}>
                    {shortenAddress(transaction.addressTo)}
                  </a>
                </div>
                <div style={{ color: "white", margin: "10px" }}>
                  <strong>Amount:</strong> {transaction.amount} ETH
                </div>
                <div style={{ color: "white", margin: "10px" }}>
                  <strong>Message:</strong> {transaction.message}
                </div>
                <div style={{ color: "white", margin: "10px" }}>
                  <strong>Timestamp:</strong> {transaction.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
