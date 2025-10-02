"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import skills from "@/data/skills.json";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
    SiMongodb,
    SiPostgresql,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
} from "react-icons/si";
import Autoplay from "embla-carousel-autoplay";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const icons = {
    js: SiJavascript,
    ts: SiTypescript,
    react: FaReact,
    next: SiNextdotjs,
    node: FaNodeJs,
    mongodb: SiMongodb,
    postgres: SiPostgresql,
    python: FaPython,
    tailwind: SiTailwindcss,
    express: SiExpress
};

const chunk = (arr: typeof skills, size: number) =>
    arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, [] as typeof skills[]);

const SkillsCarousel = () => {
    const chunks = chunk(skills, 3);

    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl">My Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center py-8">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[Autoplay({ delay: 4000 })]}
                    className="w-full max-w-md"
                >
                    <CarouselContent>
                        {chunks.map((group, index) => (
                            <CarouselItem key={index}>
                                <div className="flex items-center justify-center gap-8 py-4">
                                    {group.map((skill) => {
                                        const Icon = icons[skill.icon as keyof typeof icons];
                                        return (
                                            <div
                                                key={skill.name}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <Icon size={60} className="text-primary" />
                                                <span className="text-sm font-medium">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default SkillsCarousel;