import React from "react";

// function Infos() {
const Infos = (props) => {
    const { infos } = props;
    if (!infos || infos.length === 0) return <p>no info</p>
    return (
        <div>

            {infos.map((info) => {
                return (
                    <div key={info.id}>
                        <h5>{info.fname}</h5>
                        <p>{info.cellNum}</p>
                    </div>
                )

            })}


        </div>
    )
}
// }
export default Infos;