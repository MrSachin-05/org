"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const scriptProps = {
    ...props.scriptProps,
    ...(typeof window === "undefined" ? {} : { type: "application/json" }),
  };

  return (
    <NextThemesProvider {...props} scriptProps={scriptProps}>
      {children}
    </NextThemesProvider>
  );
}
