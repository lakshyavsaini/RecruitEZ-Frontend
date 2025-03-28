
import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import StatsCards from '@/components/dashboard/StatsCards';
import CandidatesTable from '@/components/dashboard/CandidatesTable';
import { Candidate } from '@/components/dashboard/CandidateRow';

const Dashboard = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    accepted: 0,
    rejected: 0
  });
  
  useEffect(() => {
    // Simulate fetching candidate data
    const mockCandidates: Candidate[] = [
      {
        id: '1',
        rank: 1,
        name: 'Sara',
        resumeLink: 'https://docs.google.com/document/d/1',
        matchScore: 97.2,
        status: 'accepted',
        summary: 'Sara has exceptional design skills with 5+ years of experience at top tech companies. Her portfolio demonstrates strong UX research capabilities and innovative approaches to problem-solving.'
      },
      {
        id: '2',
        rank: 2,
        name: 'Liam',
        resumeLink: 'https://docs.google.com/document/d/2',
        matchScore: 94.0,
        status: 'accepted',
        summary: 'Liam shows strong technical aptitude with a background in both frontend and backend development. His previous work with similar technologies makes him an excellent fit for this role.'
      },
      {
        id: '3',
        rank: 3,
        name: 'Emily',
        resumeLink: 'https://docs.google.com/document/d/3',
        matchScore: 93.7,
        status: 'accepted',
        summary: 'Emily demonstrates exceptional problem-solving skills and creativity. Her previous experience in similar roles shows she can handle complex challenges with ease.'
      },
      {
        id: '4',
        rank: 4,
        name: 'Lucas',
        resumeLink: 'https://docs.google.com/document/d/4',
        matchScore: 82.8,
        status: 'processing',
        summary: 'Lucas has a solid educational background and relevant internship experience. While he lacks some specific skills, his quick learning ability and enthusiasm make him a promising candidate.'
      },
      {
        id: '5',
        rank: 5,
        name: 'Olivia',
        resumeLink: 'https://docs.google.com/document/d/5',
        matchScore: 71.5,
        status: 'processing',
        summary: 'Olivia shows potential but lacks some key experience required for the role. Her transferable skills from adjacent fields could be valuable with proper training.'
      },
      {
        id: '6',
        rank: 6,
        name: 'Sophia',
        resumeLink: 'https://docs.google.com/document/d/6',
        matchScore: 67.9,
        status: 'rejected',
        summary: 'Sophia has a good educational background but limited practical experience. The skill gap appears too significant for the current requirements of this position.'
      },
      {
        id: '7',
        rank: 7,
        name: 'John',
        resumeLink: 'https://docs.google.com/document/d/7',
        matchScore: 44.6,
        status: 'rejected',
        summary: "John's experience is primarily in an unrelated field with minimal transferable skills to this position. The technical requirements alignment is too low."
      },
    ];
    
    setCandidates(mockCandidates);
    
    // Calculate stats
    const accepted = mockCandidates.filter(c => c.status === 'accepted').length;
    const rejected = mockCandidates.filter(c => c.status === 'rejected').length;
    
    setStats({
      total: mockCandidates.length,
      accepted,
      rejected
    });
  }, []);
  
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-800">Candidate Dashboard</h1>
        <p className="text-gray-600 max-w-3xl">
          Review and manage candidates based on their match score with your job requirements.
        </p>
      </div>
      
      <StatsCards 
        total={stats.total}
        accepted={stats.accepted}
        rejected={stats.rejected}
      />
      
      <CandidatesTable candidates={candidates} />
    </PageLayout>
  );
};

export default Dashboard;
