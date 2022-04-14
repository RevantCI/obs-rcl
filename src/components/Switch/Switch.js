import React from 'react';
import PropTypes from "prop-types";

export default function Switch({value, onChange, label}) {
  return (
    <>
      <label htmlFor={label+"_switch"} className="flex items-center cursor-pointer">
        <div className="relative">
          <input id={label+"_switch"} type="checkbox" className="sr-only" value={value} onChange={onChange} />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition border-gray-200 border-2"></div>{" "}
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label ?? "Switch"}</div>
      </label>
    </>
  );
}

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
