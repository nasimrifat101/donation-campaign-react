import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { getSavedDonation } from '../../utility/utility';

const Statistics = () => {
  const cards = useLoaderData();
  const totalCards = cards.length;
  const donatedCards = getSavedDonation().length;

  const donatedPercentage = ((donatedCards / totalCards) * 100).toFixed(2);
  const notDonatedPercentage = (100 - donatedPercentage).toFixed(2);

  const data = [
    { name: 'Your Donation', value: parseFloat(donatedPercentage) }, 
    { name: 'Total Donation', value: parseFloat(notDonatedPercentage) }, 
  ];

  const colors = ['#00C49F', '#FF444A'];

  return (
    <div className="flex items-center justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
