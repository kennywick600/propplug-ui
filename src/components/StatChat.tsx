import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: '5/17', hits: 2 },
    { name: '5/18', hits: 2 },
    { name: '5/19', hits: 1 },
    { name: '5/20', hits: 1 },
    { name: '5/21', hits: 1 },
    { name: '5/23', hits: 1 },
    { name: '5/24', hits: 2 },
    { name: '5/25', hits: 2 },
];

export default function StatChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hits" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
