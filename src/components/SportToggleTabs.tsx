"use client";

type SportToggleTabsProps = {
    onChange: (sport: string) => void;
};

export default function SportToggleTabs({ onChange }: SportToggleTabsProps) {
    return (
        <div className="flex space-x-4">
            {["MLB", "WNBA"].map((sport) => (
                <button
                    key={sport}
                    className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600"
                    onClick={() => onChange(sport)}
                >
                    {sport}
                </button>
            ))}
        </div>
    );
}
