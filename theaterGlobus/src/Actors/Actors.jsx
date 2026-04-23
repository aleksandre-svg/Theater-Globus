import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ActorsCard from "./ActorsCard";
import people from "./people";

const ActorsPage = () => {
    const [cols, setCols] = useState(3);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth < 600) {
            setCols(1);
        } else if (window.innerWidth < 900) {
            setCols(2);
        } else {
            setCols(3);
        }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageStyle = {
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "25px",
        justifyItems: "center",
    };

    const backBtnStyle = {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        fontWeight: "bold",
        textDecoration: "none",
        background: "#6c63ff",
        color: "white",
        padding: "8px 16px",
        borderRadius: "999px",
    };

    return (
        <>
        <Link to="/" style={backBtnStyle}>
            ← Back
        </Link>

        <div style={pageStyle}>
            <div style={gridStyle}>
            {people.map((item, index) => (
                <ActorsCard
                key={index}
                name={item.name}
                favoriteRole={item.favoriteRole}
                image={item.image}
                id={item.id}
                />
            ))}
            </div>
        </div>
        </>
    );
};

export default ActorsPage;