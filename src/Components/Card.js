import css from "./Card.css";
/*import MarketplaceABI from "../Contracts/MarketplaceABI.json";
import IERC20 from "../Contracts/IERC20.json";*/
import { useState, useEffect } from "react";
import { ethers } from "ethers";

function Card(props) {


    const Connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts");
        alert("Trying to connect");
    }

    return (
        <div className="card">
            <div class="card__image-container">
                <img src={props.imageURL} width="400"/>
            </div>

            <div class="card__content">
                <p class="card__title text--medium">
                    {props.name}
                </p>

                <div class="card__info">
                    <p class="text--medium">{props.description} </p>
                </div>

                <div>
                    <img class="buyIcon" src="https://imgur.com/MQHRBrg.png" ></img>
                    <img class="buyIcon" src="https://imgur.com/wndKTZS.png" ></img>
                    <img class="buyIcon" src="https://imgur.com/sQsv7UD.png" ></img>
                </div>
                <p onClick={Connect} class="button">Connect</p>

                <div>
                    <p class="card__price text__price">
                        {props.price != null ? props.price : "Enter"}</p>
                </div>

            </div>
        </div>



    );



}

export default Card;
