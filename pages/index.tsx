/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const App: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        router.push({ pathname: "/catalogue" });
    }, []);

    return null;
};

export default App;
