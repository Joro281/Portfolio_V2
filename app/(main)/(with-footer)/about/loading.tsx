import * as React from "react";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function Loading() {
    return (
        <LoadingScreen
            message="LOADING_ABOUT..."
            ascii={`  (╯°□°)╯︵ ┻━┻  `}
        />
    );
}
