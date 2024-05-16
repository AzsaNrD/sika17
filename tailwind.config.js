import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Mulish", ...defaultTheme.fontFamily.sans],
                anonymous: ["Anonymous Pro", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "lilac-white": "#FDFBFF",
                "lilac-grey": "#F9F4FF",
                gunmetal: "#494949",
                "slate-grey": "#707070",
                gunmetal: "#48454D",
                silver: "#A8A8A8",
                "blue-violet": "#9364CF",
                lilac: "#E7D9FA",
                "coral-red": "#CF6464",
                "light-cornflower-blue": "#6495CF",
            },
        },
    },

    plugins: [forms],
};
