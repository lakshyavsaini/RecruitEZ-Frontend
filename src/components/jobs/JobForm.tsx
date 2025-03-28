
import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ParameterItem {
  name: string;
  weight: number;
}

interface RuleItem {
  description: string;
  weight: number;
}

const JobForm = () => {
  const [parameters, setParameters] = useState<ParameterItem[]>([]);
  const [rules, setRules] = useState<RuleItem[]>([]);
  const [newParameter, setNewParameter] = useState('');
  const [newParamWeight, setNewParamWeight] = useState('');
  const [newRule, setNewRule] = useState('');
  const [newRuleWeight, setNewRuleWeight] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const addParameter = () => {
    if (!newParameter.trim()) {
      toast.error('Parameter name cannot be empty');
      return;
    }
    
    const weightNum = parseInt(newParamWeight);
    if (isNaN(weightNum) || weightNum <= 0 || weightNum > 100) {
      toast.error('Weight must be a number between 1 and 100');
      return;
    }
    
    setParameters([
      ...parameters,
      { name: newParameter, weight: weightNum }
    ]);
    setNewParameter('');
    setNewParamWeight('');
  };

  const addRule = () => {
    if (!newRule.trim()) {
      toast.error('Rule description cannot be empty');
      return;
    }
    
    const weightNum = parseInt(newRuleWeight);
    if (isNaN(weightNum) || weightNum <= 0 || weightNum > 100) {
      toast.error('Weight must be a number between 1 and 100');
      return;
    }
    
    setRules([
      ...rules,
      { description: newRule, weight: weightNum }
    ]);
    setNewRule('');
    setNewRuleWeight('');
  };

  const removeParameter = (index: number) => {
    setParameters(parameters.filter((_, i) => i !== index));
  };

  const removeRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobTitle.trim() || !companyName.trim() || !jobDescription.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (parameters.length === 0) {
      toast.error('Please add at least one parameter');
      return;
    }
    
    // Calculate total weights to check if they add up to 100%
    const totalParamWeight = parameters.reduce((sum, param) => sum + param.weight, 0);
    const totalRuleWeight = rules.reduce((sum, rule) => sum + rule.weight, 0);
    
    if (totalParamWeight !== 100) {
      toast.error(`Parameter weights must add up to 100% (currently ${totalParamWeight}%)`);
      return;
    }
    
    if (rules.length > 0 && totalRuleWeight !== 100) {
      toast.error(`Rule weights must add up to 100% (currently ${totalRuleWeight}%)`);
      return;
    }
    
    toast.success('Job posted successfully!');
    // In a real app, we would submit to an API here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 space-y-6 max-w-3xl mx-auto border border-[#c1b6a6]/50 rounded-lg shadow-sm">
      <div className="text-2xl font-bold text-center text-gray-800 mb-6">
        Job Posting
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input 
            id="company" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            className="border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input 
            id="jobTitle" 
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea 
          id="description" 
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Describe the job responsibilities, skills required..."
          className="min-h-[150px] border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Parameters</h3>
          <div className="text-sm text-gray-500">
            Total: {parameters.reduce((sum, p) => sum + p.weight, 0)}%
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_120px_auto] gap-3 items-end">
          <div>
            <Input 
              value={newParameter}
              onChange={(e) => setNewParameter(e.target.value)}
              placeholder="Enter Parameter"
              className="border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
            />
          </div>
          <div className="relative">
            <Input 
              type="number" 
              value={newParamWeight}
              onChange={(e) => setNewParamWeight(e.target.value)}
              placeholder="Weight"
              className="pr-8 border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
              min="1"
              max="100"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
          <Button 
            type="button" 
            onClick={addParameter}
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 bg-white hover:bg-gray-50"
          >
            <Plus size={16} className="mr-1" />
            Add
          </Button>
        </div>
        
        {parameters.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-2 space-y-2 max-h-[200px] overflow-y-auto border border-[#c1b6a6]/30">
            {parameters.map((param, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-2 rounded-md border border-[#c1b6a6]/20">
                <span className="flex-1 truncate">{param.name}</span>
                <span className="text-sm font-medium px-2">{param.weight}%</span>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeParameter(index)}
                  className="text-gray-500 hover:text-red-500 h-6 w-6 p-0"
                >
                  <X size={14} />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Rules</h3>
          <div className="text-sm text-gray-500">
            Total: {rules.reduce((sum, r) => sum + r.weight, 0)}%
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_120px_auto] gap-3 items-end">
          <div>
            <Input 
              value={newRule}
              onChange={(e) => setNewRule(e.target.value)}
              placeholder="Enter Rules"
              className="border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
            />
          </div>
          <div className="relative">
            <Input 
              type="number" 
              value={newRuleWeight}
              onChange={(e) => setNewRuleWeight(e.target.value)}
              placeholder="Weight"
              className="pr-8 border-[#c1b6a6]/50 focus:border-[#c1b6a6]"
              min="1"
              max="100"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
          </div>
          <Button 
            type="button" 
            onClick={addRule}
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 bg-white hover:bg-gray-50"
          >
            <Plus size={16} className="mr-1" />
            Add
          </Button>
        </div>
        
        {rules.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-2 space-y-2 max-h-[200px] overflow-y-auto border border-[#c1b6a6]/30">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-2 rounded-md border border-[#c1b6a6]/20">
                <span className="flex-1 truncate">{rule.description}</span>
                <span className="text-sm font-medium px-2">{rule.weight}%</span>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => removeRule(index)}
                  className="text-gray-500 hover:text-red-500 h-6 w-6 p-0"
                >
                  <X size={14} />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button 
          type="submit" 
          className="w-full max-w-xs bg-gray-800 hover:bg-gray-700 text-white"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default JobForm;
