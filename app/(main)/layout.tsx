"use client";

import * as React from "react";
import PageEffects from "@/components/shared/PageEffects";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [mounted, setMounted] = React.useState(false);
    const [isInitialLoading, setIsInitialLoading] = React.useState(true);

    React.useEffect(() => {
        setMounted(true);
        // Short delay to ensure the "boot" feel on initial entry
        const timer = setTimeout(() => {
            setIsInitialLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // During hydration, we want the client to match the server exactly.
    // The server rendered the loading screen because isInitialLoading was true.
    if (!mounted || isInitialLoading) {
        return (
            <LoadingScreen
                message="INITIALIZING_SYSTEM..."
                ascii={"┻━┻︵ \\(°□°)/ ︵ ┻━┻"}
            />
        );
    }

    return (
        <>
            <PageEffects />
            {children}
        </>
    );
}
