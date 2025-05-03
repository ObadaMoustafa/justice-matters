import { Variant } from "motion/react";

declare module '*.jsx';
export type MotionVariants = Record<string,Variant>;
export type NavTypes = {
  buttons: [string, string][]
}
export type FooterType = {
  title: string,
  content:string[] 
}[]
export type HomeTypes = {
  header: string[],
  content: {
    BV: {
      title: string,
      content: string,
      sectors: string[]
    },
    solution: {
      title: string,
      content: string[],
    },
    advantages: {
      title: string,
      content: {
        strong: string,
        text: string
      }[]
    }
  }
}

export type AboutTypes = {
  main: {
    title: string,
    text: string,
  }
}

export type ContactsType = {
  title: string,
  content: {
    iconClasses: string,
    title: string,
    href: string
  }[]
}

export type NOTFOUNDType = string