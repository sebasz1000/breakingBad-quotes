import React from "react";

export const Quote = ({ quote, author, number }) => {
  return (
    <>
      <blockquote className="mt-3 mb-0">
        <h5
          className="text-center mb-0"
          style={{ fontStyle: "italic", fontWeight: "normal" }}
        >
          {`${number}. ${quote}`}
        </h5>
      </blockquote>
      <p className="text-muted text-center mt-0">{author}</p>
    </>
  );
};
