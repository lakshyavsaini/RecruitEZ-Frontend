
import { useState } from 'react';
import { Edit, ChevronDown, CheckCircle, XCircle } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export interface Candidate {
  id: string;
  rank: number;
  name: string;
  resumeLink: string;
  matchScore: number;
  status: 'accepted' | 'rejected' | 'processing';
  summary?: string;
}

interface CandidateRowProps {
  candidate: Candidate;
  onStatusChange: (id: string, status: 'accepted' | 'rejected') => void;
}

const CandidateRow = ({ candidate, onStatusChange }: CandidateRowProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'accepted';
      case 'rejected':
        return 'rejected';
      case 'processing':
        return 'processing';
      default:
        return status;
    }
  };
  
  const handleAction = (action: 'accept' | 'reject') => {
    onStatusChange(candidate.id, action === 'accept' ? 'accepted' : 'rejected');
    toast.success(`Candidate ${candidate.name} has been ${action === 'accept' ? 'accepted' : 'rejected'}`);
  };
  
  return (
    <>
      <tr className="table-row-glass">
        <td className="table-cell font-medium text-center">{candidate.rank}</td>
        <td className="table-cell font-medium">{candidate.name}</td>
        <td className="table-cell">
          <a 
            href={candidate.resumeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-600 hover:underline truncate block max-w-[200px]"
          >
            {candidate.resumeLink}
          </a>
        </td>
        <td className="table-cell font-medium text-center">{candidate.matchScore}%</td>
        <td className="table-cell">
          <span className={`status-badge ${getStatusClass(candidate.status)}`}>
            {getStatusText(candidate.status)}
          </span>
        </td>
        <td className="table-cell">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="action-button bg-white" size="sm">
                <Edit size={16} className="mr-1" />
                Edit
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              <DropdownMenuItem 
                className="flex items-center cursor-pointer" 
                onClick={() => handleAction('accept')}
                disabled={candidate.status === 'accepted'}
              >
                <CheckCircle size={16} className="mr-2 text-green-600" />
                Accept
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="flex items-center cursor-pointer"
                onClick={() => handleAction('reject')}
                disabled={candidate.status === 'rejected'}
              >
                <XCircle size={16} className="mr-2 text-red-600" />
                Reject
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </td>
        <td className="table-cell">
          <Button 
            className="action-button bg-white" 
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            size="sm"
          >
            <ChevronDown size={16} className="mr-1" />
            View More
          </Button>
        </td>
      </tr>
      
      {isDetailsOpen && (
        <tr className="bg-slate-50/80">
          <td colSpan={7} className="px-4 py-3 text-sm">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Candidate Summary</h4>
              <p className="text-gray-700">
                {candidate.summary || 
                  `${candidate.name} has a match score of ${candidate.matchScore}% which indicates a strong alignment with the job requirements. The candidate has demonstrated relevant skills and experience in the field.`}
              </p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CandidateRow;
