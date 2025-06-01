// /components/wnba/WNBAPlayerHeaderBox.tsx
"use client";

export default function WNBAPlayerHeaderBox() {
    return (
        <div className="bg-zinc-800 rounded-lg p-4 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-2xl font-semibold text-purple-300">Courtney Vandersloot</h2>
                <p className="text-sm text-zinc-400">Guard | Chicago Sky</p>
                <p className="text-sm text-zinc-400">Age: 34 | College: Gonzaga | Years Active: 13</p>
            </div>
            <div className="text-right mt-4 sm:mt-0">
                <p className="text-sm text-zinc-400">Prop Line: <span className="text-white font-semibold">12.5 Points</span></p>
                <p className="text-sm text-green-400">O: -113</p>
                <p className="text-sm text-red-400">U: -115</p>
            </div>
        </div>
    );
}
