"use client";

import { Button } from "./button";
import { ModeToggle } from "./ModeToggle";

const DesktopMenu = () => {
    return (
        <>
            {/* <!-- Desktop Layout --> */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 items-center">
                {/* <!-- left side my name  --> */}
                <div className="justify-start">
                    <a href="/">
                        <h1
                            className="text-2xl font-bold text-primary flex-shrink-0 lg:text-4xl"
                        >
                            Cokumu.dev
                        </h1>
                    </a>
                </div>
                {/* <!-- menu centered  --> */}
                <div className="justify-self-center">
                    <div
                        className="px-6 py-2 bg-background/50 backdrop-blur-md
             rounded-full border border-border/20 shadow-lg/50"
                    >
                        <ul className="flex items-center list-none gap-8">
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:border-b-primary hover:border-b-2 transition-all font-semi-bold cursor-pointer text-shadow-lg"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:border-b-primary hover:border-b-2 transition-all font-semi-bold cursor-pointer text-shadow-lg"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:border-b-primary hover:border-b-2 transition-all font-semi-bold cursor-pointer text-shadow-lg"
                                >
                                    Contact
                                </a>
                            </li>
                            <li><ModeToggle /></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- cv cta --> */}
                <div className="flex-shrink-0 justify-self-end">
                    <Button className="py-4 text-xl">
                        <a href="/resume.pdf" download>Download CV</a>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DesktopMenu;