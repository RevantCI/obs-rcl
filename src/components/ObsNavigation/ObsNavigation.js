import React, { useState } from "react";
import PropTypes from "prop-types";

const ObsNavigation = (props) => {
  const { open, handleClose } = props;
  const navItems = [
    "Front",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    "Back",
  ];

  return (
    <>
      {open ? (
        <>
          <div className="flex items-center justify-center">
            <div className="w-8/12 max-w-md m-auto z-50 bg-black text-white shadow overflow-hidden sm:rounded-lg">
              <div className="flex flex-row justify-between text-center font-semibold text-xs tracking-wider uppercase">
                <div className="grid grid-cols-1 w-full bg-blue-700">
                  <div className="px-2 pt-2 bg-blue-700  cursor-pointer hover:bg-gray-700">
                    OBS
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="" onClick={handleClose}>
                    <span className="text-white px-2 text-2xl">x</span>
                  </button>
                </div>
              </div>
              <div className="grid py-5 grid-cols-10 gap-1 text-center bg-black text-white text-xs font-medium tracking-wide">
                {navItems.map((item) => (
                  <button
                    className="p-1 rounded-md hover:bg-blue-700"
                    type="button"
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
ObsNavigation.propTypes = {
  // data: PropTypes.object,
};
export default ObsNavigation;
