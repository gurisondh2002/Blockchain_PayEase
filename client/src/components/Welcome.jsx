import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from '../utils/shortenAddress'
import styles from './Welcome.module.css'
import Loader from "./Loader";

const Welcome = () => {

  const { connectWallet, connectedAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);
  const isAndroid = /android/i.test(navigator.userAgent);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { addressTo, amount, keyword, message } = formData;

      if (!addressTo || !amount || !keyword || !message) {
        console.error("Please fill in all fields");
        return;
      }

      await sendTransaction();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };


  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.mainFlexContainer}`}>
        <div className={`${styles.innerFlexContainer}`}>
          <h1 className={`${styles.title} text-white text-gradient py-1`}>
            Send Crypto <br /> across the world
          </h1>
          <p className={`${styles.description}`}>
            Explore the crypto world. Buy and sell cryptocurrencies easily on PayEase.
          </p>
          {!connectedAccount && (
            <div>
              <button
                type="button"
                onClick={connectWallet}
                className={`${styles.connectButton}`}
              >
                <AiFillPlayCircle className={`${styles.connectButtonIcon}`} />
                <p className={`${styles.connectButtonText}`}>Connect Wallet</p>
              </button>
              {isAndroid &&
                <button
                  type="button"
                  onClick={connectWallet}
                  className={`${styles.connectButton}`}>
                  <a href="https://metamask.app.link/dapp/payease.netlify.app/" className={`${styles.connectButtonText}`}>Click for Mobile</a>
                </button>
              }
            </div>

          )}
          <br />
          <table>
            <tbody>
              <tr>
                <td className={`${styles.roundedTopLeft}`}>
                  <div className={`${styles.item} `}>Reliability</div>
                </td>
                <td>
                  <div className={`${styles.item}`}>Security</div>
                </td>
                <td>
                  <div className={`${styles.item} ${styles.roundedTopRight}`}>Ethereum</div>
                </td>
              </tr>
              <tr>
                <td className={`${styles.gridContainer1}`}>
                  <div className={`${styles.item} ${styles.roundedBottomLeft}`}>Web 3.0</div>
                </td>
                <td>
                  <div className={`${styles.item}`}>Low Fees</div>
                </td>
                <td className={`${styles.gridContainer1}`}>
                  <div className={`${styles.item} ${styles.roundedBottomRight}`}>Blockchain</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`${styles.cont}`}>
          <div className={`${styles.cardContainer} eth-card`}>
            <div className={`${styles.innerContainer}`}>
              <div className={`${styles.flexRow}`}>
                <div className={`${styles.roundedFull} ${styles.roundedFullBorder}`}>
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className={`${styles.textWhite} ${styles.fontLight} text-sm`}>
                  {shortenAddress(connectedAccount)}
                </p>
                <p className={`${styles.textWhite} ${styles.fontSemibold} text-lg mt-1`}>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className={`${styles.inputBoxContainer} blue-glassmorphism`}>
            <input
              placeholder="Address To"
              type="text"
              step="0.0001"
              name="addressTo"
              value={formData.addressTo}
              onChange={handleChange}
              className={`${styles.input} white-glassmorphism`}
            />
            <input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              step="0.0001"
              value={formData.amount}
              onChange={handleChange}
              className={`${styles.input} white-glassmorphism`}
            />
            <input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              step="0.0001"
              value={formData.keyword}
              onChange={handleChange}
              className={`${styles.input} white-glassmorphism`}
            />
            <input
              placeholder="Enter Message"
              name="message"
              type="text"
              step="0.0001"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} white-glassmorphism`}
            />

            <div className={styles.separator} />

            {isLoading ? <Loader /> : (
              <button
                type="button"
                onClick={handleSubmit}
                className={styles.button}
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;