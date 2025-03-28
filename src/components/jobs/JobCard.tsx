
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="border-b border-slate-200/50">
        <div className="flex items-center p-4 gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.79 4.21,10.21L9,15V16C9,17.1 9.9,18 11,18M16.9,16.39C16.64,15.58 15.9,15 15,15H14V13C14,12.45 13.55,12 13,12H7V10H9C9.55,10 10,9.55 10,9V7H12C13.1,7 14,6.1 14,5H15C16.1,5 17,5.9 17,7V8C17,8.55 17.45,9 18,9H20C20,12.41 18.72,15.43 16.9,16.39Z" fill="#4285f4"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-recruit-primary">{company}</h3>
            <p className="text-md text-recruit-primary/80">{position}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 text-sm space-y-1 text-recruit-primary/70">
        <p>Total Applicants : {totalApplicants}</p>
        <p>Applicants Accepted: {acceptedApplicants}</p>
        <p>Under Review: {underReview}</p>
      </div>
      <div className="p-4 pt-2 flex justify-center">
        <Link to={`/job/${id}`}>
          <Button variant="outline" className="w-full glass-button">
            View Detail
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
