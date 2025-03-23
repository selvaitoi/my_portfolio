"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundCircles() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className={cn(
                "absolute -left-[10vw] top-1/4 h-[45vw] w-[45vw] rounded-full",
                "bg-gradient-to-r from-purple-500 to-pink-500",
                "animate-[pulse_10s_linear_infinite] opacity-30 blur-[100px]"
            )} />
            <div className={cn(
                "absolute -right-[10vw] top-1/3 h-[35vw] w-[35vw] rounded-full",
                "bg-gradient-to-r from-cyan-500 to-blue-500",
                "animate-[pulse_15s_linear_infinite] opacity-30 blur-[100px]"
            )} />
            <div className={cn(
                "absolute left-1/4 top-[40%] h-[25vw] w-[25vw] rounded-full",
                "bg-gradient-to-r from-green-500 to-emerald-500",
                "animate-[pulse_20s_linear_infinite] opacity-30 blur-[100px]"
            )} />
        </div>
    );
}