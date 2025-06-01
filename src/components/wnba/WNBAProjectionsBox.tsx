// WNBAProjectionsBox.tsx
export default function WNBAProjectionsBox() {
    return (
        <div className="bg-zinc-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">📈 WNBA Projections</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-zinc-400">
                            <th className="text-left">STAT</th>
                            <th>PROJ</th>
                            <th>LINE</th>
                            <th className="text-green-400">DIFF</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr>
                            <td>AST</td><td>5.58</td><td>5.5</td><td className="text-green-400">+0.08</td>
                        </tr>
                        <tr>
                            <td>REB</td><td>2.79</td><td>3.5</td><td className="text-red-400">-0.71</td>
                        </tr>
                        <tr>
                            <td>RA</td><td>8.37</td><td>10.5</td><td className="text-red-400">-2.13</td>
                        </tr>
                        <tr>
                            <td>PR</td><td>12.3</td><td>14.5</td><td className="text-red-400">-2.2</td>
                        </tr>
                        <tr>
                            <td>PTS</td><td>9.5</td><td>12.5</td><td className="text-red-400">-3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
