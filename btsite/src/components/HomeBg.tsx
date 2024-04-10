import React, {FC} from "react";
import './HomeBg.scss'

const HomeBg:FC = () => {
    return (
        <div className="HomeBg">
            {Array.from(Array(200).keys()).map((_x, idx) => {
                console.log("sup");
                return <div key={idx} className="snowflake">
                    <div className="inner"></div>
                </div>
            })}
        </div>
    );
}

export default HomeBg;