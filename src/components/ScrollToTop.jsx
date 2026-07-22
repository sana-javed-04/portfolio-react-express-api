import {
    FaArrowUp
} from "react-icons/fa";

import { useEffect, useState } from "react";

export default function ScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        function handleScroll() {

            if (window.scrollY > 300) {

                setShowButton(true);

            }

            else {

                setShowButton(false);

            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    function scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    return (

        <button

            className={

                showButton

                    ? "scroll-top show"

                    : "scroll-top"

            }

            onClick={scrollTop}

            aria-label="Scroll To Top"

        >

            <FaArrowUp />
        </button>

    );

}