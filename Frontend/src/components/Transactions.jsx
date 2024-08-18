import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AiFillPlayCircle } from "react-icons/ai";
import notFound from '../../images/not_found.png';


import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      {/* Outer Circle */}
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.9,
            y: -15,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="128"
        cy="128"
        r="120"
        stroke="#F7931A"
        strokeWidth="16"
        fill="none"
      />

      {/* Bitcoin Symbol */}
      <motion.path
        variants={{
          hover: {
            scaleY: 1.2,
            y: -10,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        d="M180.8 101.3c3.6-24.4-14.9-37.5-40.3-46l8.2-32.8-20-5.1-8 31.9c-5.3-1.3-10.8-2.5-16.3-3.7l8.1-32.5-20-5.1-8.2 32.8c-4.4-1-8.7-2-12.9-3.1l-0.026-0.12-27.6-7-5.3 21.5s14.9 3.4 14.6 3.6c8.2 2.1 9.6 7.8 9.4 12.3l-9.4 37.7c0.56 0.15 1.3 0.38 2.1 0.73-0.54-0.14-1.1-0.31-1.7-0.48l-13.2 53.1c-1 2.5-3.5 6.2-9.1 4.8 0.2 0.29-14.6-3.6-14.6-3.6l-9.9 22.7 26 6.5c4.8 1.2 9.5 2.5 14.1 3.7l-8.3 33.2 20 5.1 8.2-32.9c5.6 1.5 11 2.8 16.3 4l-8.1 32.4 20 5.1 8.3-33.2c34.4 6.5 60.3 3.9 71.2-27.2 8.8-25.2-0.44-39.7-18.6-49.2 13.2-3 23.1-11.5 25.8-29.2zm-46.3 63.7c-6.3 25.2-48.8 11.6-62.5 8.2l11.2-44.8c13.7 3.4 58.1 10.2 51.2 36.6zm6.3-64c-5.7 22.9-40.8 11.3-52.3 8.5l10.1-40.4c11.5 2.9 48.4 8.3 42.2 31.9z"
        fill="#F7931A"
      />
    </motion.svg>

  );
};

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-800 p-8 mt-8 mb-8 ml-11 mr-11"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {shortenAddress(addressTo)}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {amount}
          <br />
          ETH
        </motion.span>
        <p>
          {message}
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        {timestamp}
      </button>
      <Background />
    </motion.div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount, connectWallet, transactionCount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <div className="justify-center items-center flex-col">
            <div>
              <h3 className="text-white text-3xl text-center my-2">
                Connect your account to see the latest transactions
              </h3>
            </div>
            <div style={{display: 'ruby-text'}}>
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            </div>
            <div style={{display: 'ruby-text'}}>
              <img src={notFound} />              
            </div>
          </div>
        )}

        {transactionCount ? (
          <div className="flex flex-wrap justify-center items-center mt-10">
            {[...transactions].reverse().map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        ) : (
              <div style={{display: 'ruby-text'}}>
                <img src={notFound} />              
              </div>
        )}

        
      </div>
    </div>
  );
};

export default Transactions;