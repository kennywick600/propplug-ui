// src/lib/trackedStatsSchema.ts

export const trackedStats = {
    MLB: {
        Batters: {
            mainStats: [
                "HITS", "HRR", "Ks", "HR", "1B", "2B", "3B", "RBI", "RUNS", "BB", "TB", "SB", "HFS", "Career vs Pitcher"
            ],
            plateAppearanceOutcome: [
                "SNG", "DBL", "TPL", "HR", "K", "BB", "REACH ON ERROR", "IN PLAY OUT"
            ],
            splits: [
                "HOME/AWAY", "RHP/LHP", "DAY/NIGHT", "FAVORITE/UNDERDOG", "DAYS REST",
                "REGULAR/PLAYOFFS/WORLD SERIES", "DIVISION/CONFERENCE",
                "AFTER 3 INNINGS", "AFTER 6 INNINGS",
                "CURRENT SEASON", "LAST SEASON", "HEAD2HEAD", "LAST 5", "LAST 10", "LAST 20", "LAST 30"
            ]
        },
        Pitchers: {
            mainStats: [
                "K's", "WALKS", "HA", "ER", "OUTS", "PFS", "GROUND BALLS", "LINE DRIVES", "FLY BALLS",
                "HR ALLOWED", "INNINGS PITCHED", "Career vs Batter"
            ],
            pitchesThrown: [
                "TOTAL", "FASTBALLS", "BREAKING BALLS", "CHANGEUPS", "OTHER PITCHES"
            ],
            splits: [
                "HOME/AWAY", "RHP/LHP", "DAY/NIGHT", "FAVORITE/UNDERDOG", "DAYS REST",
                "REGULAR/PLAYOFFS/WORLD SERIES", "DIVISION/CONFERENCE",
                "AFTER 1", "AFTER 3", "AFTER 6",
                "CURRENT SEASON", "LAST SEASON", "HEAD2HEAD", "LAST 5", "LAST 10", "LAST 20", "LAST 30"
            ]
        },
        Teams: {
            mainStats: [
                "GAME WON", "SINGLES ALLOWED", "DOUBLES ALLOWED", "TRIPLES ALLOWED",
                "RUNS SCORED", "HR", "TOTAL HITS", "WALKS"
            ],
            splits: [
                "HOME/AWAY", "HEAD2HEAD", "FAVORITE/DOG", "DIVISION/CONFERENCE",
                "DAY/NIGHT", "DAYS REST", "REGULAR/PLAYOFFS/WORLD SERIES", "RHP/LHP"
            ]
        }
    },
    WNBA: {
        Players: {
            mainStats: [
                "PTS", "RBS", "ASTS", "PR", "PA", "RA", "PRA", "FS",
                "3PA", "3PM", "2PA", "2PM", "FTA", "FTM",
                "BLK", "STL", "B+S", "FOULS"
            ],
            splits: [
                "HOME/AWAY", "FAVORITE/UNDERDOG", "DAYS REST", "CONFERENCE/DIVISION",
                "DAYTIME/PRIME TIME/LATE", "REGULAR/PLAYOFFS/FINALS",
                "CURRENT YEAR", "LAST YEAR", "LAST 5", "LAST 10", "LAST 20", "LAST 30",
                "FULL GAME", "1H", "2H", "1Q", "2Q", "3Q", "4Q", "OT"
            ]
        },
        Teams: {
            mainStats: [
                "TOTAL POINTS", "REBOUNDS", "ASSISTS", "1H WINNER", "2H WINNER",
                "ODD TOTAL", "OVERTIME", "HIGHEST SCORING QUARTER"
            ],
            splits: [
                "HOME/AWAY", "FAVORITE/UNDERDOG", "DAYS REST", "CONFERENCE/DIVISION",
                "DAYTIME/PRIME TIME/LATE", "REGULAR/PLAYOFFS/FINALS",
                "CURRENT YEAR", "LAST YEAR", "LAST 5", "LAST 10", "LAST 20", "LAST 30"
            ]
        }
    }
};
