import { TailwindComponent } from "@/src/components/TailwindComponent";
import Image from "next/image";
import { AvatarStyles } from "./styles";

export const IntroAvatar = () => <TailwindComponent
    as={Image} src="/images/bravedave_avatar.png" alt="Avatar" styles={AvatarStyles} width={100} height={100} />