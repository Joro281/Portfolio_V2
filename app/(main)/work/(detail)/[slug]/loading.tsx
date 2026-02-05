import LoadingScreen from "@/components/shared/LoadingScreen";

export default function Loading() {
    return (
        <LoadingScreen
            message="LOADING_PROJECT_DETAILS..."
            ascii={`   _____  \n  /     \\\\ \n | () () |\n  \\\\  ^  / \n   |||||  `}
        />
    );
}
