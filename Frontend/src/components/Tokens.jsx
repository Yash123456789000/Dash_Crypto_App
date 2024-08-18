import { Navbar, Welcome, Footer, Services, Transactions } from ".";
import { AiFillPlayCircle } from "react-icons/ai";
import notFound from '../../images/not_found.png';
import React, { useContext, useState, useEffect } from "react";
import { ethers } from 'ethers';
import { TransactionContext } from "../context/TransactionContext";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const ERC20_ABI = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
  ];





const Tokens = () => {
    const address="0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce";
    const { transactions, currentAccount, connectWallet, transactionCount } = useContext(TransactionContext);

    // get all the token info

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState(null);


    const fetchTokenBalance = async (userAddress) => {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(address, ERC20_ABI, signer);
          const balanceInWei = await contract.balanceOf(userAddress);
          const balance = ethers.utils.formatUnits(balanceInWei, 18); // Assuming 18 decimals
          setBalance(balance);
          console.log(balance);
        } catch (error) {
          console.error(error);
        }
      };

    const getToken = async () => {
        try {
        const web3 = new Web3("https://cloudflare-eth.com/");
        const contract = new web3.eth.Contract(ERC20_ABI, address);
        const [name, symbol, decimals] = await Promise.all([
            contract.methods.name().call(),
            contract.methods.symbol().call(),
            contract.methods.decimals().call(),
        ]);
        setToken({ name, symbol, decimals });
        } catch {
        setToken(false);
        }
    };

    const addToken = async () => {
        setLoading(true);
        try {
        const provider = await detectEthereumProvider();
        if (!provider) {
            alert("Please install metamask to proceed");
        } else {
            await provider.request({
            method: "eth_requestAccounts",
            });
            await provider.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                address,
                symbol: token.symbol,
                decimals: token.decimals,
                },
            },
            });
        }
        } catch {
        alert("Unable to add the token");
        }
        setLoading(false);
    };

    useEffect(() => {
        getToken();
        fetchTokenBalance(currentAccount);
    }, []);

    return(
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <div>
                {currentAccount ? (
                <h3 className="text-white text-3xl text-center my-2">
                    Your Tokens
                </h3>
                ) : (
                <div className="justify-center items-center flex-col">
                    <div>
                    <h3 className="text-white text-3xl text-center my-2">
                        Connect your account to see the Your Tokens
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

                <div className="text-white items-center">
                    <button onClick={addToken} disabled={loading || !Boolean(token)}>
                        {(token && `Add ${token.name}`) || "Loading Button..."}
                    </button>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tokens;