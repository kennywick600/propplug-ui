'use client';

import { useState } from "react";

// 🧩 Sport toggles
import SportToggleTabs from "@/components/SportToggleTabs";
import ToggleTabs from "@/components/ToggleTabs";

// ⚾ MLB UI Boxes
import ProjectionsBox from "@/components/ProjectionsBox";
import PlateOutcomeBox from "@/components/PlateOutcomeBox";
import SplitsBox from "@/components/SplitsBox";
import VsPitcherBox from "@/components/VsPitcherBox";
import TeamDefenseBox from "@/components/TeamDefenseBox";
import PitchAnalysisBox from "@/components/PitchAnalysisBox";
import OddsBox from "@/components/OddsBox";
import HistoricalLinesBox from "@/components/HistoricalLinesBox";
import SprayChartBox from "@/components/SprayChartBox";
import OffensiveSplitsBox from "@/components/OffensiveSplitsBox";

// 🏀 WNBA UI Boxes
import WNBAPlayerHeaderBox from "@/components/wnba/WNBAPlayerHeaderBox";
import WNBAProjectionsBox from "@/components/wnba/WNBAProjectionsBox";
import WNBAOddsBox from "@/components/wnba/WNBAOddsBox";
import WNBAHistoricalLinesBox from "@/components/wnba/WNBAHistoricalLinesBox";
import WNBAFullGameSplitsBox from "@/components/wnba/WNBAFullGameSplitsBox";
import WNBAQuarterSplitsBox from "@/components/wnba/WNBAQuarterSplitsBox";
import WNBASplitsBox from "@/components/wnba/WNBASplitsBox";
import WNBAPlateOutcomeBox from "@/components/wnba/WNBAPlateOutcomeBox";
import WNBAOffensiveProfileBox from "@/components/wnba/WNBAOffensiveProfileBox";
import WNBATeamDefenseBox from "@/components/wnba/WNBATeamDefenseBox";
import WNBAVsTeamBox from "@/components/wnba/WNBAVsTeamBox";

export default function PlayerPropsPage() {
    const [selectedSport, setSelectedSport] = useState<"MLB" | "WNBA">("MLB");
    const [activeTab, setActiveTab] = useState<"player" | "team">("player");

    return (
        <div className="w-full min-h-screen p-6 bg-zinc-900 text-white space-y-6">
            {/* Sport selection */}
            <SportToggleTabs onChange={(sport) => setSelectedSport(sport as "MLB" | "WNBA")} />

            {/* Tab selection */}
            <ToggleTabs onChange={(tab) => setActiveTab(tab)} />

            {/* Debug info */}
            <p className="text-sm text-zinc-400">Active tab: {activeTab}</p>

            {/* Header */}
            <h1 className="text-3xl font-bold">
                {selectedSport === "MLB" && "⚾ MLB Player Prop Tracker"}
                {selectedSport === "WNBA" && "🏀 WNBA Player Prop Tracker"}
            </h1>

            {/* ⚾ MLB VIEW */}
            {selectedSport === "MLB" && (
                <>
                    <ProjectionsBox />
                    <PlateOutcomeBox />
                    <SplitsBox />
                    <VsPitcherBox />
                    <TeamDefenseBox />
                    <PitchAnalysisBox />
                    <OddsBox />
                    <HistoricalLinesBox />
                    <SprayChartBox />
                    <OffensiveSplitsBox />
                </>
            )}

            {/* 🏀 WNBA VIEW */}
            {selectedSport === "WNBA" && (
                <>
                    <WNBAPlayerHeaderBox />
                    <WNBAProjectionsBox />
                    <WNBAOddsBox />
                    <WNBAHistoricalLinesBox />
                    <WNBAFullGameSplitsBox />
                    <WNBAQuarterSplitsBox />
                    <WNBASplitsBox />
                    <WNBAPlateOutcomeBox />
                    <WNBAOffensiveProfileBox />
                    <WNBATeamDefenseBox />
                    <WNBAVsTeamBox />
                </>
            )}
        </div>
    );
}
