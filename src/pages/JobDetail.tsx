
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Calendar, MapPin, Briefcase, Clock } from 'lucide-react';

type JobDetail = {
  id: string;
  company: string;
  position: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  totalApplicants: number;
  acceptedApplicants: number;
  underReview: number;
};

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch job details
    const fetchJobDetail = () => {
      setLoading(true);
      
      // Mock data for the job detail
      const mockJob: JobDetail = {
        id: id || '1',
        company: 'Google',
        position: 'Product Designer',
        location: 'Mountain View, CA',
        type: 'Full-time',
        experience: '3-5 years',
        salary: '$120k - $160k',
        postedDate: '2 weeks ago',
        description: 'We are looking for a talented Product Designer to join our team at Google. The ideal candidate will have a strong portfolio demonstrating exceptional UI/UX skills and a user-centered design approach. You will work closely with product managers, engineers, and other designers to create intuitive and beautiful user experiences.',
        responsibilities: [
          'Create user-centered designs by understanding business requirements and user feedback',
          'Develop wireframes, prototypes, and high-fidelity mockups',
          'Collaborate with cross-functional teams throughout the design process',
          'Conduct user research and evaluate user feedback',
          'Identify design problems and devise elegant solutions',
        ],
        requirements: [
          "Bachelor's degree in Design, HCI, or related field",
          "At least 3-5 years of experience in product design",
          "Strong portfolio showing your design thinking and process",
          "Experience with design tools like Figma, Sketch, Adobe XD",
          "Excellent communication and presentation skills",
          "Experience working in an Agile/Scrum development process",
        ],
        totalApplicants: 1700,
        acceptedApplicants: 600,
        underReview: 200,
      };
      
      // Simulate network delay
      setTimeout(() => {
        setJob(mockJob);
        setLoading(false);
      }, 500);
    };
    
    fetchJobDetail();
  }, [id]);

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse text-xl text-gray-600">Loading job details...</div>
        </div>
      </PageLayout>
    );
  }

  if (!job) {
    return (
      <PageLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job not found</h2>
          <Link to="/jobs">
            <Button variant="outline" className="border-gray-400 text-gray-700 hover:bg-gray-100">
              Back to Job Listings
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/jobs" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to job listings
            </Link>
            
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-gray-800">{job.position}</h1>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center mr-2 shadow-sm">
                <img 
                  src="/lovable-uploads/3fd684a9-bb15-4cd2-959e-f56c66687bcc.png" 
                  alt="Google Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-gray-600 font-medium">{job.company}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="col-span-2 border-[#c1b6a6] shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Job Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">{job.description}</p>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-800">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border-[#c1b6a6] shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">Job Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-600">{job.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-600">Compensation: {job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-gray-500" />
                    <span className="text-gray-600">Posted: {job.postedDate}</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-[#c1b6a6] shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800">Application Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Applicants:</span>
                    <span className="font-medium text-gray-800">{job.totalApplicants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accepted:</span>
                    <span className="font-medium text-gray-800">{job.acceptedApplicants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Under Review:</span>
                    <span className="font-medium text-gray-800">{job.underReview}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-100">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default JobDetail;
