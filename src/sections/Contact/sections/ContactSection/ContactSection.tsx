import { TailwindComponent } from "@/src/components/TailwindComponent";
import ContactForm from "../../components/ContactForm";
import { SectionStyles } from "./styles";

export function ContactSection() {
    return <TailwindComponent as="section" styles={SectionStyles}><ContactForm /> </TailwindComponent>
} 