
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to job listings page
  useEffect(() => {
    navigate('/jobs');
  }, [navigate]);
  
  // Add a simple return statement with loading indicator
  return <div className="p-8 text-center">Redirecting to jobs...</div>;
};

export default Index;
