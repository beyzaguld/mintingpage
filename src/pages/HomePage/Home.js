import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "./../../redux/data/dataActions";
import { StyledButton } from "../../components/styles/button.styled";
import { StyledRoundButton } from "./../../components/styles/styledRoundButton.styled";
import { StyledLink } from "./../../components/styles/link.styled";
import { ResponsiveWrapper } from "./../../components/styles/responsivewrapper.styled";
import * as s from "./../../styles/globalStyles";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Countdown from "../../components/Countdown/Countdown";
const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const { createAlchemyWeb3, ethers } = require("@alch/alchemy-web3");
var Web3 = require('web3');
var Contract = require('web3-eth-contract');

function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintDone, setMintDone] = useState(false);
  const [supply , setTotalSupply] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [mintAmount, setMintAmount] = useState(1);
  const [displayCost, setDisplayCost] = useState(0.10);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
   
    setClaimingNft(true);
    setFeedback(`Confirm Your Transaction In Wallet!!!`);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setMintDone(true);
        setFeedback(
          `Done, the ${CONFIG.NFT_NAME} NFT is yours!`
        );
        // setClaimingNft(false);
        blockchain.smartContract.methods.totalSupply().call().then(res => {
          setTotalSupply(res);
        });
        
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    setDisplayCost(parseFloat(CONFIG.DISPLAY_COST * newMintAmount).toFixed(2));
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
    setDisplayCost(parseFloat(CONFIG.DISPLAY_COST * newMintAmount).toFixed(2));
  };

  const maxNfts = () => {
    setMintAmount(10);
    setDisplayCost(parseFloat(CONFIG.DISPLAY_COST * 10).toFixed(2));
  };
  
    const getDataWithoutWallet = async () => {
    const web3 = createAlchemyWeb3("https://polygon-mumbai.g.alchemy.com/v2/Tjlfal65795w2pi-sSd6JUrY1SX-qkIt");
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    var contract = new Contract(abi, '0x584973a6eC38d9121f39DDa6072D38C66e407584');
    contract.setProvider(web3.currentProvider);
    console.log(contract);
    const totalSupply = await contract.methods
      .totalSupply()
      .call();
    setTotalSupply(totalSupply);

  }

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      const totalSupply =  await blockchain.smartContract.methods.totalSupply().call();
      setTotalSupply(totalSupply);
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);

  };

  useEffect(() => {
    getConfig();
    getDataWithoutWallet();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  let countDownDate = new Date("Feb 12, 2022 20:00:00 GMT -6:00").getTime();

  let now = new Date().getTime();

  let timeleft = countDownDate - now;

  const [days, setDays] = useState();
  const [hours, setHour] = useState();
  const [minutes, setMint] = useState();
  const [seconds, setSec] = useState();

  useEffect(() => {
      const interval = setInterval(() => {
        setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
        setHour(
          Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMint(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
        setSec(Math.floor((timeleft % (1000 * 60)) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

  return (
    <>
  <s.Body >
      <Navbar />
      <HeroSection />

      {days > -1 && hours > -1 && minutes > -1 && seconds > -1 && (
        <Countdown />

      ) }
     
      <s.FlexContainer
        flex={1}
        jc={"space-evenly"}
        ai={"center"}
        fd={"row"}
        mt={"-71vh"}
        style={{
          zIndex: "1",
         
        }}
      >
        <s.Mint>

          <s.FlexContainer fd={"row"} ai={"center"} jc={"space-between"}>
            <s.TextTitle>Amount</s.TextTitle>
            <s.AmountContainer ai={"center"} jc={"space-between"} fd={"row"}>
              <StyledRoundButton
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  decrementMintAmount();
                }}
              >
                -
              </StyledRoundButton>
              <s.SpacerMedium />
              <s.TextDescription  size={"1.8rem"}>
                {mintAmount}
              </s.TextDescription>
              <StyledRoundButton
                disabled={claimingNft ? 1 : 0}
                onClick={(e) => {
                  e.preventDefault();
                  incrementMintAmount();
                }}
              >
                +
              </StyledRoundButton>
            </s.AmountContainer>

            <s.maxButton
            style={{cursor:"pointer"}}
              onClick={(e) => {
                e.preventDefault();
                maxNfts();
              }}
            >
              Max
            </s.maxButton>
          </s.FlexContainer>
          

          <s.SpacerMedium />
          <s.FlexContainer fd={"row"} ai={"center"} jc={"space-between"}>
            <s.TextTitle>Total</s.TextTitle>
            <s.TextTitle>{displayCost} MATIC</s.TextTitle>
          </s.FlexContainer>
          <s.SpacerSmall />
          <s.Line />
          <s.SpacerSmall />

          {blockchain.account !== "" && blockchain.smartContract !== null ? (
          <s.Container ai={"center"} jc={"center"} fd={"row"}>
            <s.connectButton
              disabled={claimingNft ? 1 : 0}
              onClick={(e) => {
                e.preventDefault();
                claimNFTs();
                getData();
              }}
            >
              {" "}
              {claimingNft ? feedback : "Mint"}{" "}
             
            </s.connectButton>{" "}
           
          </s.Container>
          ) : (
            <s.connectButton
                      style={{
                        font: 'syne',
                        textAlign: "center",
                        color: "var(--web-theme)",
                        cursor:"pointer",
                      }}
                      onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                    >
                      Connect Your Wallet
                    </s.connectButton>
          )}

          {blockchain.errorMsg !== "" ? (
            <s.connectButton
                      style={{
                        textAlign: "center",
                        color: "var(--web-theme)",
                        cursor:"pointer",
                      }}
                    >
                       {blockchain.errorMsg}
                    </s.connectButton>
          ) : ("")}

        </s.Mint>
      </s.FlexContainer>
      </s.Body>
    </>
    
  );
}

export default Home;
