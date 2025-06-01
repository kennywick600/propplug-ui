"use client";

const tabs = ["NBA", "MLB", "NHL", "WNBA", "CSGO"];

export default function ToggleTabs() {
    return (
        <div className="flex gap-4 bg-zinc-800 p-3 rounded-lg justify-center">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className="px-4 py-1 rounded-full text-sm font-medium border border-zinc-600 hover:bg-zinc-700 transition"
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
