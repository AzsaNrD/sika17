import React from "react";
import { FaDiscord } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between py-16 bg-lilac-grey">
            <div className="flex flex-col justify-between w-full max-w-5xl px-4 mx-auto gap-7 md:items-center md:flex-row xl:px-0">
                <div>
                    <h3 className="text-2xl font-bold font-anonymous text-gunmetal">
                        SIKA17
                    </h3>
                    <p className="mt-2 text-slate-grey">
                        &copy; {new Date().getFullYear()} SIKA17. All rights
                        reserved.{" "}
                    </p>
                </div>
                <hr className="border-zinc-200 md:hidden" />
                <div>
                    <div>
                        <a
                            href="https://discord.gg/G2hZTV9yCY"
                            target="_blank"
                            className="min-w-48 flex justify-center items-center hover:shadow-md font-medium gap-2 text-lilac-grey w-full rounded-[10px] py-3 px-6 bg-blue-violet hover:bg-blue-violet/90 transition-all duration-200 shadow-[0_4px_4px_10px_rgba(157, 131, 190, 0.25)]"
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
