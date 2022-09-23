import { useState } from "react";

export function useError() {
    const [error, setError] = useState({});

    const setCatchError = (message) => {
        setError(message);
    };

    return [
        error,
        setCatchError,
    ];
};