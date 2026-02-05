import LoadingScreen from "@/components/shared/LoadingScreen";

export default function Loading() {
    return (
        <LoadingScreen
            message="LOADING_WORKSS..."
            ascii={`  /\\\\_/\\\\  \n ( o.o ) \n  > ^ <  `}
        />
    );
}
