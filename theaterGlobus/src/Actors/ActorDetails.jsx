import React from "react";
import { useParams, Link } from "react-router-dom";
import people from "./people.js"


const ActorDetails = () => {
    const { id } = useParams();
    const actor = people.find((p) => p.id === Number(id));
    console.log(actor)
    if (!actor) {
        return (
        <div className="detailsPage">
            <h2>Actor not found</h2>
            <Link to="/">Go back</Link>
        </div>
        );
    }

    return (
        <div className="detailsPage">
            <div className="detailsCard">

                {/* IMAGE */}
                <div className="detailsImage">
                    <img src={actor.image} alt={actor.name} style={{
                        borderRadius: '0px'
                    }} />
                </div>

                {/* INFO */}
                <div className="detailsInfo">
                <h1>{actor.name}</h1>

                <div className="badge">{actor.favoriteRole}</div>

                <div className="infoGrid">
                    <p><span>Age:</span> {actor.age}</p>
                    <p><span>Free Time:</span> {actor.freeTime}</p>
                    <p><span>Book:</span> {actor.favoriteBook}</p>
                    <p><span>Music:</span> {actor.music}</p>
                    <p><span>Animal:</span> {actor.favoriteAnimal}</p>
                </div>

                <div className="reasonBox">
                    <h3>Why acting?</h3>
                    <p>{actor.reasonForActing}</p>
                </div>

                <Link className="backBtn" to="/">
                    ← Back
                </Link>
                </div>

            </div>
        </div>
    );
};

export default ActorDetails;