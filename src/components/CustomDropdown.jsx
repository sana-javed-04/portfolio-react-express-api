import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({

    label,
    options,
    value,
    onChange

}) {

    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (

                dropdownRef.current &&

                !dropdownRef.current.contains(event.target)

            ) {

                setOpen(false);

            }

        }

        document.addEventListener("click", handleClickOutside);

        return () =>

            document.removeEventListener("click", handleClickOutside);

    }, []);

    return (

        <div
            className="custom-dropdown"
            ref={dropdownRef}
        >

            <button

                className="dropdown-btn"

                onClick={() => setOpen(!open)}

                type="button"

            >

                {value === "All" ? label : value}

                <i className="fa-solid fa-chevron-down"></i>

            </button>

            {

                open &&

                <div className="dropdown-menu">

                    {

                        options.map(option => (

                            <div

                                key={option}

                                className={

                                    value === option

                                        ?

                                        "dropdown-item active"

                                        :

                                        "dropdown-item"

                                }

                                onClick={() => {

                                    onChange(option);

                                    setOpen(false);

                                }}

                            >

                                {option}

                            </div>

                        ))

                    }

                </div>

            }

        </div>

    );

}