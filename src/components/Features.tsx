import { Smartphone, AlertTriangle, FileText } from 'lucide-react';
import '../utils/animations.css';

export default function Features() {
  return (
    <div id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-16 animate-slideUp">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Smartphone className="h-8 w-8 text-cyan-600" />}
            title="Ease of use"
            description="The app is easy to download and can be used by anyone."
            delay="100"
          />
          <FeatureCard
            icon={<AlertTriangle className="h-8 w-8 text-cyan-600" />}
            title="Capture the photos and videos"
            description="Ability to take photos and videos related to the traffic violation."
            delay="200"
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-cyan-600" />}
            title="Ease of taking action "
            description="Ability to initiate Actions by the relevant police station."
            delay="300"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) {
  return (
    <div className={`text-center animate-scaleIn hover-glow p-6 rounded-xl animate-delay-${delay}`}>
      <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}