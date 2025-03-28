
interface StatsCardsProps {
  total: number;
  accepted: number;
  rejected: number;
}

const StatsCards = ({ total, accepted, rejected }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="p-6 rounded-xl shadow-md bg-blue-500 text-white">
        <h3 className="text-white/90 font-medium mb-2">TOTAL:</h3>
        <p className="text-4xl font-bold">{total}</p>
      </div>
      
      <div className="p-6 rounded-xl shadow-md bg-green-500 text-white">
        <h3 className="text-white/90 font-medium mb-2">ACCEPTED:</h3>
        <p className="text-4xl font-bold">{accepted}</p>
      </div>
      
      <div className="p-6 rounded-xl shadow-md bg-red-500 text-white">
        <h3 className="text-white/90 font-medium mb-2">REJECTED:</h3>
        <p className="text-4xl font-bold">{rejected}</p>
      </div>
    </div>
  );
};

export default StatsCards;
