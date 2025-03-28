
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
      className="bg-white overflow-hidden transition-all duration-300 border border-[#c1b6a6]/60 rounded-lg shadow-sm hover:shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="border-b border-[#c1b6a6]/30">
        <div className="flex items-center p-4 gap-3">
          <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
            <img 
              src="/lovable-uploads/3fd684a9-bb15-4cd2-959e-f56c66687bcc.png" 
              alt="Google Logo" 
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
            <p className="text-md text-gray-600">{position}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 text-sm space-y-1 text-gray-600">
        <p>Total Applicants: <span className="text-gray-800 font-medium">{totalApplicants}</span></p>
        <p>Applicants Accepted: <span className="text-gray-800 font-medium">{acceptedApplicants}</span></p>
        <p>Under Review: <span className="text-gray-800 font-medium">{underReview}</span></p>
      </div>
      
      <div className="p-4 pt-2 flex justify-end">
        <Link to={`/job/${id}`}>
          <Button 
            variant="outline" 
            size="sm"
            className={cn(
              "border-2 border-gray-800 text-gray-800 bg-white hover:bg-gray-50 group-hover:translate-x-1 transition-all duration-300",
              isHovered ? "translate-x-1" : ""
            )}
          >
            <span>View Detail</span>
            <Eye size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
