import React from "react";


const Feature = (props) => {
    const { match } = props;
    let name = `${match.params.name}`;
    let topic = match.params.topic;
    return (
        <div>
            <span>Feature {name} {topic}</span>
        </div>
    );
};

export default Feature;