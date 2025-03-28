
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to job listings page
  useEffect(() => {
    navigate('/jobs');
  }, [navigate]);
  
  return null;
};

export default Index;
