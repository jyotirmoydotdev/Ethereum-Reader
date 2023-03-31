import React, {useState} from 'react';
//import Button from "../Button";
import axios from "axios";

const ClaimNft = ({utility}) => {

    // Add additional data to the engagement before saving finally

    const [additionalData, setAdditionalData] = useState('');

    const claimUtility = async () => {

        axios.post('http://localhost:3000/claim', {
            "utilityId": utility.id,
            "walletAddress": utility.wallet.address,
            "tokenId": utility.tokenId,
            "signature": utility.signature,
            "additionalData": additionalData
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => {
               utility.engagement = response.data.engagement
            })
            .catch(error => console.log(error));


    }

    return (
        <div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Additional data
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="additionalData"
                        id="additionalData"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={additionalData} onChange={(e) => setAdditionalData(e.target.value)}
                    />
                </div>
            </div>

            <button className="mt-5" disabled={!additionalData} onClick={() => {
                claimUtility()
            }}>Claim Utility</button>
        </div>
    );
};

export default ClaimNft;
