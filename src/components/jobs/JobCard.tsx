
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface JobCardProps {
  company: string;
  position: string;
  totalApplicants: number;
  acceptedApplicants: number;
  underReview: number;
  id: string;
}

const JobCard = ({
  company,
  position,
  totalApplicants,
  acceptedApplicants,
  underReview,
  id
}: JobCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="neo-glass overflow-hidden transition-all duration-500 hover:shadow-[0_10px_25px_rgba(41,70,236,0.3)] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="border-b border-white/10">
        <div className="flex items-center p-4 gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/3fd684a9-bb15-4cd2-959e-f56c66687bcc.png" 
              alt="Google Logo" 
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{company}</h3>
            <p className="text-md text-blue-100">{position}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 text-sm space-y-1 text-blue-100/90">
        <p>Total Applicants: <span className="text-white font-medium">{totalApplicants}</span></p>
        <p>Applicants Accepted: <span className="text-white font-medium">{acceptedApplicants}</span></p>
        <p>Under Review: <span className="text-white font-medium">{underReview}</span></p>
      </div>
      
      <div className="p-4 pt-2 flex justify-end">
        <Link to={`/job/${id}`}>
          <Button 
            variant="ghost" 
            size="sm"
            className={cn(
              "bg-white/10 hover:bg-indigo-500/80 text-white border border-white/20 group-hover:translate-x-1 transition-all duration-300",
              isHovered ? "translate-x-1" : ""
            )}
          >
            <span>View Detail</span>
            <Eye size={16} className="ml-1 group-hover:animate-pulse" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
