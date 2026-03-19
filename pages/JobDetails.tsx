import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/sections/Footer';
import { 
  Building, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowLeft, 
  CheckCircle2, 
  Briefcase,
  Mail,
  Send
} from 'lucide-react';

const jobDatabase: Record<string, any> = {
  'senior-frontend-engineer': {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "$40k - $70k",
    description: "We are looking for an experienced Senior Frontend Engineer to join our core engineering team. You will be responsible for building highly interactive and scalable web applications using React and modern frontend ecosystems. If you have a passion for pixel-perfect design, performance optimization, and clean code, we want to hear from you.",
    responsibilities: [
      "Architect, build, and maintain high-performance, reusable, and reliable React components.",
      "Collaborate with cross-functional teams (Design, Product, and Backend) to deliver features.",
      "Optimize applications for maximum speed and scalability across various devices and browsers.",
      "Mentor junior developers and participate in rigorous code reviews.",
      "Drive the adoption of best practices in code health, testing, and maintainability."
    ],
    requirements: [
      "4+ years of professional experience with React.js and its core principles.",
      "Strong proficiency in JavaScript/TypeScript, DOM manipulation, and the JavaScript object model.",
      "Experience with popular React.js workflows (such as Redux or Context API).",
      "Familiarity with RESTful APIs, modern authorization mechanisms, and GraphQL.",
      "Understanding of modern frontend build pipelines and tools (Vite, Webpack, Babel).",
      "Excellent problem-solving skills and attention to UI/UX details."
    ]
  },
  'cloud-solutions-architect': {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$60k - $90k",
    description: "As a Cloud Solutions Architect, you will lead the design and implementation of highly scalable, fault-tolerant, and secure cloud infrastructure. You will work closely with enterprise clients to understand their needs and architect robust solutions on AWS/Azure.",
    responsibilities: [
      "Design and deploy scalable, highly available, and fault tolerant systems on AWS.",
      "Work directly with clients to define architectural requirements and provide technical leadership.",
      "Migrate existing on-premise applications to the cloud.",
      "Establish best practices for DevOps, CI/CD, and security.",
      "Evaluate new technologies and prototype solutions."
    ],
    requirements: [
      "5+ years of experience designing and building cloud architectures on AWS, Azure, or GCP.",
      "Deep understanding of cloud computing technologies, business drivers, and emerging computing trends.",
      "Strong expertise in Infrastructure as Code (Terraform, CloudFormation).",
      "Experience with containerization and orchestration (Docker, Kubernetes).",
      "Excellent communication skills to articulate complex technical concepts to non-technical stakeholders."
    ]
  },
  'product-manager---ai-platforms': {
    title: "Product Manager - AI Platforms",
    department: "Product",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "$50k - $80k",
    description: "We are seeking a visionary Product Manager to lead our new AI Platform division. You will be at the intersection of business, technology, and user experience, driving the roadmap for innovative AI-powered tools.",
    responsibilities: [
      "Define the product vision, strategy, and roadmap for enterprise AI platforms.",
      "Work closely with engineering and data science teams to deliver cutting-edge AI features/models.",
      "Gather and analyze customer feedback to shape product direction.",
      "Define and track key product metrics to measure success and drive iteration.",
      "Manage the entire product life cycle from strategic planning to tactical execution."
    ],
    requirements: [
      "3+ years of product management experience, preferably in B2B SaaS or AI products.",
      "Strong analytical and problem-solving skills with a data-driven approach.",
      "Ability to understand and discuss technical concepts, manage tradeoffs, and evaluate opportunistic new ideas with internal and external partners.",
      "Excellent written and verbal communication skills.",
      "A passion for artificial intelligence and its real-world enterprise applications."
    ]
  },
  'ux-ui-designer': {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    salary: "Competitive",
    description: "We are looking for a talented UX/UI Designer to create amazing user experiences. You will be responsible for translating high-level requirements into interaction flows and artifacts, and transforming them into beautiful, intuitive, and functional user interfaces.",
    responsibilities: [
      "Design intuitive and elegant interfaces for complex web and mobile applications.",
      "Conduct user research and evaluate user feedback to refine designs.",
      "Create wireframes, storyboards, user flows, and site maps.",
      "Collaborate seamlessly with front-end developers to ensure accurate implementation.",
      "Maintain and evolve our central design system."
    ],
    requirements: [
      "3+ years of proven UI/UX design experience with a strong portfolio showcasing complex systems.",
      "Solid experience in creating wireframes, storyboards, user flows, and site maps.",
      "Proficiency in Figma, Sketch, or Adobe Creative Suite.",
      "Excellent visual design skills with sensitivity to user-system interaction.",
      "Ability to present your designs and sell your solutions to various stakeholders."
    ]
  },
  'technical-project-manager': {
    title: "Technical Project Manager",
    department: "Product",
    location: "Bengaluru, India",
    type: "Full-time",
    salary: "$45k - $75k",
    description: "The Technical Project Manager will oversee the full lifecycle of software development projects. You will act as the bridge between engineering, stakeholders, and clients to ensure timely and high-quality deliveries.",
    responsibilities: [
      "Coordinate internal resources and third parties/vendors for the flawless execution of projects.",
      "Ensure that all projects are delivered on-time, within scope, and within budget.",
      "Develop comprehensive project plans to be shared with clients as well as other staff members.",
      "Perform risk management to minimize project risks.",
      "Lead sprint planning, stand-ups, and retrospectives in an Agile environment."
    ],
    requirements: [
      "3+ years of working experience in project management in the information technology sector.",
      "Solid technical background, with understanding or hands-on experience in software development and web technologies.",
      "Excellent client-facing and internal communication skills.",
      "Solid organizational skills including attention to detail and multi-tasking skills.",
      "Strong working knowledge of Agile methodologies and tools (Jira, Asana)."
    ]
  },
  'devops-engineer': {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$55k - $85k",
    description: "We are seeking a proactive DevOps Engineer to help bridge the gap between development and operations. You will be responsible for deploying product updates, identifying production issues, and implementing integrations that meet our customers' needs.",
    responsibilities: [
      "Design, build, and maintain our CI/CD pipelines.",
      "Manage cloud infrastructure (AWS/Azure) ensuring high availability, performance, and security.",
      "Monitor system performance metrics and handle incident response.",
      "Automate operational processes as needed, with accuracy and in compliance with security requirements.",
      "Implement and maintain robust backup and recovery procedures."
    ],
    requirements: [
      "3+ years of experience as a DevOps Engineer or similar role.",
      "Proficiency with CI/CD tools (e.g., Jenkins, GitHub Actions, GitLab CI).",
      "Strong knowledge of container orchestration tools (Kubernetes, Docker Swarm).",
      "Experience with scripting languages (Python, Bash).",
      "Familiarity with cloud platforms (AWS, Azure) and monitoring tools (Prometheus, Grafana)."
    ]
  }
};

const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? jobDatabase[jobId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Job Not Found</h1>
        <p className="text-slate-400 mb-8">The open position you are looking for does not exist or has been closed.</p>
        <Link to="/careers" className="btn-primary">Back to Careers</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative border-b border-slate-800 bg-slate-950 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-teal-600/10 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/careers" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                {job.department}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-slate-300 font-medium">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-rose-400 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-amber-400 mr-2" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                  {job.salary}
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
               <a href="mailto:Inogllecompany@gmail.com?subject=Application for ${job.title}&body=Hello Inoglle Team,%0A%0AAttached is my resume for the ${job.title} position.%0A%0ARegards," className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1">
                 Apply via Email <Send className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_300px] gap-12">
          
          {/* Job Details Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-800 pb-2">About the Role</h2>
              <p className="text-slate-400 leading-loose text-[1.05rem]">
                {job.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">What You'll Do</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((req: string, idx: number) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-2">What We're Looking For</h2>
              <ul className="space-y-4">
                {job.requirements.map((req: string, idx: number) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <Briefcase className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Application Instructions Section */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden mt-10">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[40px]"></div>
               <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                 <Mail className="mr-3 text-blue-400" /> How to Apply
               </h3>
               <p className="text-slate-400 mb-6 leading-relaxed">
                 To apply for this position, please send your updated resume along with any relevant portfolios or GitHub profiles to our HR department. Make sure to use "<span className="text-blue-300 font-semibold">{job.title} Application</span>" as the subject line.
               </p>
               
               <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Send Resume Via Email</p>
                      <p className="text-white font-mono text-lg font-medium">Inogllecompany@gmail.com</p>
                    </div>
                  </div>
                  
                  <a href={`mailto:Inogllecompany@gmail.com?subject=Application for ${job.title}&body=Hello Inoglle Team,%0A%0AAttached is my resume for the ${job.title} position.%0A%0ARegards,`} className="px-6 py-2.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto text-center shrink-0">
                    Draft Email
                  </a>
               </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-32">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-800 pb-2">Benefits & Perks</h3>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hybrid/Remote Work</h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">Work from anywhere or join us in our Bengaluru office.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Competitive Salary</h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">Top-tier compensation package including stock equity.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Flexible PTO</h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">Take the time you need, when you need to recharge.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-center text-slate-500 uppercase tracking-widest font-semibold mb-4">Share this role</p>
                <div className="flex gap-2 justify-center">
                   <button className="flex-1 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-sm font-medium border border-slate-700" onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert("Link copied!"))}>
                     Copy Link
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default JobDetails;
