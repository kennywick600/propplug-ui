'use client';

import { useState } from 'react';

// 🧩 Sport toggles
import SportToggleTabs from '@/components/SportToggleTabs';
import ToggleTabs from '@/components/ToggleTabs';

// ⚾ MLB UI Boxes
import MLBProjectionsBox from '@/components/mlb/MLBProjectionsBox';
import MLBPlateOutcomeBox from '@/components/mlb/MLBPlateOutcomeBox';
import MLBSplitsBox from '@/components/mlb/MLBSplitsBox';
import MLBVsPitcherBox from '@/components/mlb/MLBVsPitcherBox';
import MLBPitchAnalysisBox from '@/components/mlb/MLBPitchAnalysisBox';
import MLBOffensiveSplitsBox from '@/components/mlb/MLBOffensiveSplitsBox';
import MLBTeamDefenseBox from '@/components/mlb/MLBTeamDefenseBox';
import MLBHistoricalLinesBox from '@/components/mlb/MLBHistoricalLinesBox';
import MLBSprayChartBox from '@/components/mlb/MLBSprayChartBox';
import MLBOddsBox from '@/components/mlb/MLBOddsBox';

// 🏀 WNBA UI Boxes
import WNBAPlayerHeaderBox from '@/components/wnba/WNBAPlayerHeaderBox';
import WNBAProjectionsBox from '@/components/wnba/WNBAProjectionsBox';
import WNBAOddsBox from '@/components/wnba/WNBAOddsBox';
import WNBAPlateOutcomeBox from '@/components/wnba/WNBAPlateOutcomeBox';
import WNBASplitsBox from '@/components/wnba/WNBASplitsBox';
import WNBAQuarterSplitsBox from '@/components/wnba/WNBAQuarterSplitsBox';
import WNBAFullGameSplitsBox from '@/components/wnba/WNBAFullGameSplitsBox';
import WNBAHistoricalLinesBox from '@/components/wnba/WNBAHistoricalLinesBox';
import WNBAOffensiveProfileBox from '@/components/wnba/WNBAOffensiveProfileBox';
import WNBATeamDefenseBox from '@/components/wnba/WNBATeamDefenseBox';
import WNBAVsTeamBox from '@/components/wnba/WNBAVsTeamBox';

export default function PlayerPropsPage() {
    const [selectedSport, setSelectedSport] = useState<'MLB' | 'WNBA'>('MLB');
    const [activeTab, setActiveTab] = useState<'player' | 'team'>('player');

    return (
        <div className="w-full min-h-screen p-6 bg-zinc-900 text-white space-y-6">
            <SportToggleTabs onChange={(sport) => setSelectedSport(sport as 'MLB' | 'WNBA')} />
            <ToggleTabs onChange={(tab) => setActiveTab(tab)} />
            <p className="text-sm text-zinc-400">Active tab: {activeTab}</p>

            <h1 className="text-3xl font-bold">
                {selectedSport === 'MLB' && '⚾ MLB Player Prop Tracker'}
                {selectedSport === 'WNBA' && '🏀 WNBA Player Prop Tracker'}
            </h1>

            {/* ⚾ MLB - Player Tab */}
            {selectedSport === 'MLB' && activeTab === 'player' && (
                <>
                    <MLBProjectionsBox />
                    <MLBPlateOutcomeBox />
                    <MLBSplitsBox />
                    <MLBVsPitcherBox />
                    <MLBPitchAnalysisBox />
                    <MLBOffensiveSplitsBox />
                </>
            )}

            {/* ⚾ MLB - Team Tab */}
            {selectedSport === 'MLB' && activeTab === 'team' && (
                <>
                    <MLBTeamDefenseBox />
                    <MLBHistoricalLinesBox />
                    <MLBSprayChartBox />
                    <MLBOddsBox />
                </>
            )}

            {/* 🏀 WNBA - Player Tab */}
            {selectedSport === 'WNBA' && activeTab === 'player' && (
                <>
                    <WNBAPlayerHeaderBox />
                    <WNBAProjectionsBox />
                    <WNBAOddsBox />
                    <WNBAPlateOutcomeBox />
                    <WNBASplitsBox />
                    <WNBAQuarterSplitsBox />
                </>
            )}

            {/* 🏀 WNBA - Team Tab */}
            {selectedSport === 'WNBA' && activeTab === 'team' && (
                <>
                    <WNBAFullGameSplitsBox />
                    <WNBAHistoricalLinesBox />
                    <WNBAOffensiveProfileBox />
                    <WNBATeamDefenseBox />
                    <WNBAVsTeamBox />
                </>
            )}
        </div>
    );
}
