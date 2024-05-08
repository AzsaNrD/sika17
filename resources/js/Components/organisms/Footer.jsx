import React from "react";
import { FaDiscord } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-lilac-grey py-16 flex justify-between items-center">
            <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
                <div>
                    <h3 className="font-anonymous font-bold text-2xl text-gunmetal">
                        SIKA17
                    </h3>
                    <p className="text-gunmetal mt-2">
                        &copy; {new Date().getFullYear()} SIKA17. All rights
                        reserved.{" "}
                    </p>
                </div>
                <div>
                    <div>
                        <a
                            href="https://discord.gg/G2hZTV9yCY"
                            target="_blank"
                            className="min-w-48 flex justify-center items-center font-medium gap-2 text-lilac-grey w-full rounded-[10px] py-3 px-6 bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 shadow-[0_4px_4px_10px_rgba(157, 131, 190, 0.25)]"
                        >
                            <FaDiscord className="text-2xl" />
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
