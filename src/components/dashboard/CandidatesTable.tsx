
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
    <div className="glass-panel overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">RANK</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">NAME</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">RESUME LINK</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">MATCH SCORE</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">STATUS</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">ACTION</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-900">VIEW DETAILS</th>
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
