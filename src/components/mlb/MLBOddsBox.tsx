'use client';

import { useEffect, useState } from 'react';
import { fetchOdds } from '@/lib/oddsApi';
import { OddsData } from '@/types/OddsTypes';

export default function MLBOddsBox() {
    const [odds, setOdds] = useState<OddsData[]>([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await fetchOdds('baseball_mlb');
            setOdds(data);
        }
        load();
    }, []);

    const bestEVIndex = odds.reduce((bestIdx, curr, idx, arr) => {
        return curr.under > arr[bestIdx].under ? idx : bestIdx;
    }, 0);

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Odds <span className="text-sm text-zinc-400">{odds.length}</span></h2>
                <button onClick={() => setShow(!show)} className="text-sm text-zinc-400 hover:underline">
                    {show ? 'Hide' : 'Show'}
                </button>
            </div>
            {show && (
                <table className="w-full text-sm text-left text-zinc-300">
                    <thead className="text-zinc-500 border-b border-zinc-700 text-xs">
                        <tr>
                            <th className="py-1">BOOK</th>
                            <th className="py-1">L</th>
                            <th className="py-1">O</th>
                            <th className="py-1">U</th>
                        </tr>
                    </thead>
                    <tbody>
                        {odds.map((book, i) => (
                            <tr key={book.name} className="border-b border-zinc-800">
                                <td className="py-1 font-medium">
                                    {book.name}
                                    {i === bestEVIndex && <span className="ml-1 text-green-400 text-xs font-bold">+EV</span>}
                                </td>
                                <td>{book.line}</td>
                                <td>{book.over}</td>
                                <td>{book.under}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <p className="text-[10px] text-zinc-500 mt-2">🔴 Source book used for EV calculation.</p>
        </div>
    );
}
