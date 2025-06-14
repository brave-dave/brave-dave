import { TailwindComponent } from "@/src/components/TailwindComponent";
import { SectionStyles } from "./styles";

export function AboutSection() {
    return <TailwindComponent as="section" styles={SectionStyles}>
        I’m a full-stack developer with a passion for building practical, fast, and maintainable web applications. From MVPs to production-ready platforms, I help startups and teams deliver solid user experiences with speed and focus.
    </TailwindComponent>
} 