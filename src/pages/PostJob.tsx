
import PageLayout from '@/components/layout/PageLayout';
import JobForm from '@/components/jobs/JobForm';

const PostJob = () => {
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Post a New Job</h1>
        <p className="text-slate-600 max-w-3xl">
          Create a new job posting with detailed parameters and rules to help match the right candidates.
        </p>
      </div>
      
      <JobForm />
    </PageLayout>
  );
};

export default PostJob;
