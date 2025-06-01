"use client";

import { useState } from "react";

export default function ToggleTabs({
    onChange,
}: {
    onChange: (tab: "player" | "team") => void;
}) {
    const [activeTab, setActiveTab] = useState<"player" | "team">("player");

    const handleTab = (tab: "player" | "team") => {
        setActiveTab(tab);
        onChange(tab);
    };

    return (
        <div className="flex space-x-4 mb-4">
            <button
                className={`px-4 py-2 rounded ${activeTab === "player" ? "bg-green-500 text-white" : "bg-zinc-700"
                    }`}
                onClick={() => handleTab("player")}
            >
                Player Props
            </button>
            <button
                className={`px-4 py-2 rounded ${activeTab === "team" ? "bg-green-500 text-white" : "bg-zinc-700"
                    }`}
                onClick={() => handleTab("team")}
            >
                Team Props
            </button>
        </div>
    );
}
