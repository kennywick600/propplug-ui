// /components/wnba/WNBAVsTeamBox.tsx
"use client";

export default function WNBAVsTeamBox() {
    return (
        <div className="bg-zinc-800 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-bold mb-3 text-purple-300">🤝 Vs Team Matchup</h2>
            <div className="text-sm space-y-2">
                <p>Head-to-head averages vs today’s opponent</p>
                <p>Position-specific defense stats allowed</p>
                <p>Team defensive rating vs similar archetype</p>
                <p>Recent trends vs this team (L5, L10)</p>
            </div>
        </div>
    );
}
