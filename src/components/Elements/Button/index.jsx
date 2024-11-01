import React, { children } from "react";

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
          {children}
        </button>
    );
};

export default Button
