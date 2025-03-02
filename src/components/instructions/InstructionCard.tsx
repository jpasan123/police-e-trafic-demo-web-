interface InstructionCardProps {
    title: string;
    description: string;
    image: string;
    number: number;
    delay: number;
  }
  
  export default function InstructionCard({ 
    title, 
    description, 
    image, 
    number,
    delay 
  }: InstructionCardProps) {
    return (
      <div 
        className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scaleIn`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="relative h-64"> {/* Increased height */}
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain bg-gray-50" /* Changed to object-contain and added background */
          />
          <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
            {number}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-navy-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }