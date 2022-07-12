import React from "react";
import { Route, Link } from "react-router-dom"

// function Infos() {
const Infos = (props) => {
    const { infos } = props;
    if (!infos || infos.length === 0) return <p>no info</p>
    return (
        <div>

            {infos.map((info) => {
                return (
                    <div key={info.id}>
                        <Link to={`/RelationshipList/${info.id}/taste`}> <h5>{info.fname}</h5></Link>

                        <p>{info.cellNum}</p>
                    </div>
                )

            })}


        </div>
    )
}
// }
export default Infos;