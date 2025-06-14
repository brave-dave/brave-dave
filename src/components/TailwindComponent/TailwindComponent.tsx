import isArray from "lodash/isArray"
import React from "react"
import {
    createTools,
    type CreateTailwindest,
    type CreateTailwindLiteral,
} from "tailwindest"
import type { Tailwind, TailwindNestGroups } from "./types"

type Tailwindest = CreateTailwindest<{
    tailwind: Tailwind
    tailwindNestGroups: TailwindNestGroups
    groupPrefix: "$"
}>
type TailwindLiteral = CreateTailwindLiteral<Tailwind>

const tw = createTools<{
    tailwindest: Tailwindest
    tailwindLiteral: TailwindLiteral
}>()

export type TailwindStyles = Tailwindest | Tailwindest[] | TailwindStyles[] | undefined
export type TailwindStylesMulti<T extends string = string> = Record<T, TailwindStyles>

export type TailwindComponentTagName = React.ComponentType | React.ElementType

type ComponentProps<T extends TailwindComponentTagName> = T extends React.ComponentType<infer P> ?
    Omit<P, "className" | "style">
    : Omit<React.ComponentPropsWithoutRef<T>, "className" | "style">

export type TailwindComponentProps<T extends TailwindComponentTagName> = {
    as?: T
    styles?: TailwindStyles
    children?: React.ReactNode
} & ComponentProps<T>

const flattenStyles = (styles: TailwindStyles): Tailwindest[] => {
    const stylesArray = isArray(styles) ? styles : [styles];
    return stylesArray.flatMap(style => {
        if (isArray(style)) {
            return flattenStyles(style);
        }
        return style
    }).filter(value => !!value);
}

export const TailwindComponent = <T extends TailwindComponentTagName>({ as = "div" as T, styles, children, ...props }: TailwindComponentProps<T>) => {
    const className = React.useMemo(() => {
        const flatStyles = flattenStyles(styles);
        return tw.mergeProps(...flatStyles);
    }, [styles]);
    const Component = as as React.ElementType;

    return <Component className={className} {...props}>{children}</Component>;
};