
import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import JobCard, { JobCardProps } from '@/components/jobs/JobCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<(JobCardProps & { id: string })[]>([]);
  
  useEffect(() => {
    // Simulate fetching job data
    const mockJobs = [
      {
        id: '1',
        company: 'Google',
        position: 'Product Designer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '2',
        company: 'Google',
        position: 'Software Engineer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '3',
        company: 'Google',
        position: 'Product Designer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '4',
        company: 'Google',
        position: 'Product Designer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '5',
        company: 'Google',
        position: 'HR Head',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '6',
        company: 'Google',
        position: 'Software Engineer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '7',
        company: 'Google',
        position: 'Java Developer',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      },
      {
        id: '8',
        company: 'Google',
        position: 'SDE-1',
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      }
    ];
    
    setJobs(mockJobs);
  }, []);
  
  const filteredJobs = jobs.filter(job => 
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.position.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageLayout>
      <AnimatedBackground />
      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-4 text-gradient">Job Listings</h1>
          <p className="text-slate-100 max-w-3xl">
            Browse through our available job openings. Click on a job card to view details and manage applications.
          </p>
        </div>
        
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search jobs by position..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/20 focus:bg-white/30 text-white placeholder:text-gray-300 border-white/30"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="col-span-full text-center py-12 bg-white/10 backdrop-blur-md rounded-lg">
              <h3 className="text-lg font-medium text-white">No jobs found</h3>
              <p className="mt-1 text-sm text-gray-300">
                Try adjusting your search terms or check back later for new openings.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default JobListings;
