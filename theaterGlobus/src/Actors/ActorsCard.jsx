import React from "react";
import { Link } from "react-router-dom";

const ActorsCard = ({ name, favoriteRole, image, id  }) => {
    const cardStyle = {
    width: "260px",
    background: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    fontFamily: "Arial, sans-serif",
    };

    const imageWrapper = {
    width: "100%",
    height: "180px",
    overflow: "hidden",
    };

    const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    };

    const contentStyle = {
    padding: "14px",
    textAlign: "center",
    };

    const nameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2c2c2c",
    margin: "6px 0",
    };

    const roleStyle = {
    fontSize: "13px",
    color: "#666",
    background: "#f3f3ff",
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "999px",
    };
    return (
        <Link to={`/actors/${id}`}>
            <div style={cardStyle}>
                <div style={imageWrapper}>
                    <img src={image} alt={name} style={imgStyle} />
                </div>

                <div style={contentStyle}>
                    <h2 style={nameStyle}>{name}</h2>
                    <p style={roleStyle}>{favoriteRole}</p>
                </div>
            </div>
        </Link>
    );
};

export default ActorsCard;