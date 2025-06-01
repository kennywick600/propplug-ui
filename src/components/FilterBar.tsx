"use client";

export default function FilterBar() {
    return (
        <div className="w-full flex flex-wrap gap-4 mb-6">
            <input
                type="text"
                placeholder="Search player..."
                className="px-3 py-2 rounded bg-zinc-800 text-white"
            />
            <select className="px-3 py-2 rounded bg-zinc-800 text-white">
                <option value="today">Today</option>
                <option value="last5">Last 5 Games</option>
                <option value="season">Season Avg</option>
            </select>
            <select className="px-3 py-2 rounded bg-zinc-800 text-white">
                <option value="hits">Hits</option>
                <option value="points">Points</option>
                <option value="assists">Assists</option>
            </select>
        </div>
    );
}
