import "./FeaturedInfo.css"
//import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export default function featuredInfo() {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredtitle">Energy Status</span>
                <div className="featuredContentDetails">
                <span className="Detail">Energy Level</span>
                   
                    
                </div>
                <div className="featuredrate">
                <span className="maindetail"> <ArrowUpwardIcon color="green" className="featuredinfoIcons"/> 75 % </span>
                </div>

            </div>
            <div className="featureditem">
                <span className="featuredtitle">Cost</span>
                <div className="featuredContentDetails">
                    <span className="Detail">September 2021</span>
                   
                </div>
                <div className="featuredrate">
                <span className="maindetail"> <AccountBalanceWalletIcon className="featuredinfoIcons"/> 458 SEK </span>
                </div>

            </div>
            <div className="featureditem">
                <span className="featuredtitle">Carbon dioxide</span>
                <div className="featuredContentDetails">
                <span className="Detail">September 2021</span>
                    
                    
                </div>
                <div className="featuredrate">
                <span className="maindetail"><AutorenewIcon/> 1235,58  kg</span>
                </div>

            </div>
         
        </div>
    )
}
