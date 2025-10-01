"use client";

import { SquareMenu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

const MobileMenu = () => {
    return (
        <>
            <div className="flex items-center gap-2">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button className="h-6 w-6" variant="ghost" size="icon">
                            <SquareMenu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                            <a href="#projects" className="cursor-pointer">Projects</a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <a href="/about" className="cursor-pointer">About</a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <a href="#contact" className="cursor-pointer">Contact</a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <a href="/resume.pdf" download className="cursor-pointer">Download CV</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </>
    );
};

export default MobileMenu;
