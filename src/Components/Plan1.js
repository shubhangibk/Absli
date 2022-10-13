import React from 'react';
import './Plan1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculateIcon from '@mui/icons-material/Calculate';



function Plan1() {
    return (
        <>
            <div class='FD-1'>

                <h4 ><strong>Why choose FD++ Plan</strong></h4>
                <span class='sub-head'>We ensure the best insurance services for our customer</span>

                <ul class="list-items ">
                    <li class="flex-container">
                        <span>
                            <img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Iconbenefit-Maturity-Benefit.webp?extension=webp&revision=8d73ada2-100a-4ac5-bd51-e1fced7e6b26&modified=20220214105729"
                            />
                        </span>
                        <span>
                            <h6><strong>Guaranteed Maturity</strong></h6>
                            Not 1 but 10 plan options to choose from. Opting for the most suitable option based on coverage
                            needs has never been so
                            easy.
                        </span>
                    </li>
                    <li class="flex-container">
                        <span>
                            <img src=" https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Iconbenefit-Tax-Benefit.webp?extension=webp&revision=a348598b-6455-47d4-80e5-71f23d41679d&modified=20220214105730"
                            />
                        </span>
                        <span>
                            <h6><strong>Tax Benefits</strong></h6>
                            This Comprehensive Term Insurance Plan covers policyholders till 100 years of age.
                        </span>
                    </li>
                    <li class="flex-container">
                        <span>
                            <img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Iconbenefit-Enhanced-life-stage-protection-Benefit.webp?extension=webp&revision=c2262a18-16be-4cb7-addc-17f8d993ec8f&modified=20220214105729"
                            />
                        </span>
                        <span>
                            <h6><strong>Single Premium</strong></h6>
                            Flexible death benefit payouts as a monthly, lump sum or both.
                        </span>

                    </li>
                    <li class="flex-container">
                        <span>
                            <img src="https://abcscprod.azureedge.net/-/media/Project/ABSLI/Article-Images/Icon-set/Iconbenefit-Accelerated-Critical-Illness-benefit.webp?extension=webp&revision=6149cfc4-2691-4614-9193-7ab558469089&modified=20220214105729"
                            />
                        </span>
                        <span>
                            <h6><strong>Life Cover</strong></h6>
                            Option to avail monthly income for a worry-free retired life. Survival benefit for policyholders
                            to ensure financial
                            security after 60 years of age.
                        </span>

                    </li>
                </ul>

                <div class='cal-btn'>
                    <button type="submit" class="btn btn-danger btn-lg" id="calculate" ><CalculateIcon /> CALCULATE RETURN</button>

                </div>

            </div>

            <div class='plan-end'>

                <div class='plane-1'>

                    <span class='plan-1'><strong> +10k</strong> </span>
                    <br></br>
                    <span >Active customer</span>

                </div>
                <div class='plane-2'>
                    <span class='plan-2'><strong> 95%</strong> </span>
                    <br></br>
                    <span > claims settlement ratio</span>
                </div>
                <div class='plane-3'>
                    <span class='plan-3'><strong> 100% </strong> </span>
                    <br></br>
                    <span > Life cover </span>

                </div>

            </div>

          


        </>




    );
}


export default Plan1;