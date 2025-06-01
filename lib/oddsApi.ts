const ODDS_API_KEY = process.env.NEXT_PUBLIC_ODDS_API_KEY;
const BASE_URL = 'https://api.the-odds-api.com/v4/sports';

type Sport = 'baseball_mlb' | 'basketball_wnba';

export async function fetchOdds(
    sport: Sport,
    regions = 'us',
    markets = 'h2h,spreads,totals',
    bookmakers = 'draftkings',
    date?: string
) {
    const url = new URL(`${BASE_URL}/${sport}/odds`);
    url.searchParams.append('apiKey', ODDS_API_KEY!);
    url.searchParams.append('regions', regions);
    url.searchParams.append('markets', markets);
    url.searchParams.append('bookmakers', bookmakers);
    if (date) url.searchParams.append('dateFormat', 'iso');

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error(`Failed to fetch odds for ${sport}`);
    }

    return res.json();
}
