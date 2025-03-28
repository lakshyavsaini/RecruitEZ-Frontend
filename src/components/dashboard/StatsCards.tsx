
interface StatsCardsProps {
  total: number;
  accepted: number;
  rejected: number;
}

const StatsCards = ({ total, accepted, rejected }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="p-6 rounded-lg shadow-sm border border-[#c1b6a6]/50 bg-white text-gray-800">
        <h3 className="text-gray-600 font-medium mb-2">TOTAL:</h3>
        <p className="text-4xl font-bold text-gray-800">{total}</p>
      </div>
      
      <div className="p-6 rounded-lg shadow-sm border border-[#c1b6a6]/50 bg-white text-gray-800">
        <h3 className="text-gray-600 font-medium mb-2">ACCEPTED:</h3>
        <p className="text-4xl font-bold text-green-600">{accepted}</p>
      </div>
      
      <div className="p-6 rounded-lg shadow-sm border border-[#c1b6a6]/50 bg-white text-gray-800">
        <h3 className="text-gray-600 font-medium mb-2">REJECTED:</h3>
        <p className="text-4xl font-bold text-red-600">{rejected}</p>
      </div>
    </div>
  );
};

export default StatsCards;
