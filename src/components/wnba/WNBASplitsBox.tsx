// /components/wnba/WNBASplitsBox.tsx
"use client";

export default function WNBASplitsBox() {
    return (
        <div className="bg-zinc-800 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-bold mb-3 text-purple-300">📊 WNBA Splits</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p>Home / Away</p>
                    <p>Day / Night</p>
                    <p>Favorite / Underdog</p>
                    <p>Days Rest</p>
                </div>
                <div>
                    <p>Division / Conference</p>
                    <p>1H / 2H / Q1-Q4 / OT</p>
                    <p>Regular / Playoffs / Finals</p>
                    <p>Last 5 / 10 / 20 / 30</p>
                </div>
            </div>
        </div>
    );
}
