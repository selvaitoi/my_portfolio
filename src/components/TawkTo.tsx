import { useEffect } from "react";

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

const TawkTo = () => {
    useEffect(() => {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://embed.tawk.to/67e029cf98d9ad1905a9d11c/1in1q6lk3";
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup when component unmounts
        };
    }, []);

    return null;
};

export default TawkTo;
