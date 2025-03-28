
import { useState } from 'react';
import CandidateRow, { Candidate } from './CandidateRow';

interface CandidatesTableProps {
  candidates: Candidate[];
}

const CandidatesTable = ({ candidates: initialCandidates }: CandidatesTableProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  
  const handleStatusChange = (id: string, status: 'accepted' | 'rejected') => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status } : candidate
    ));
  };
  
  return (
    <div className="bg-white overflow-hidden rounded-lg border border-[#c1b6a6]/50 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-[#c1b6a6]/30">
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">RANK</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">NAME</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">RESUME LINK</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">MATCH SCORE</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">STATUS</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">ACTION</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-800">VIEW DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <CandidateRow 
                key={candidate.id} 
                candidate={candidate}
                onStatusChange={handleStatusChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidatesTable;
