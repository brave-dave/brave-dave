import { TailwindComponent } from "@/src/components/TailwindComponent";
import { SectionStyles } from "./styles";

export function ExperiencesSection() {
    return <TailwindComponent as="section" styles={SectionStyles}>- **AutoBrain** – A web platform to track, list, and manage used cars. Built with Next.js, DynamoDB, and Puppeteer for automation.
        - **IGDB Enhancements** – Contributed features to improve usability and data interaction in one of the largest game databases online.
        - **TaskAI** *(MVP)* – Chat-based task manager where users can generate and manage projects through conversation with AI. Built with React, Tailwind, and GPT APIs.
    </TailwindComponent>
} 