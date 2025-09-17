import { createContext, useEffect, useState } from "react";

export const WindowSizeContext = createContext<{ width: number, height: number } | null>(null)

export function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })
    
    useEffect(() => {
        function handleResize(){
            setSize({ width: window.innerWidth, height: window.innerHeight })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return size
}