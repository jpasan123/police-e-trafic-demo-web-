interface TutorialStepProps {
    title: string;
    description: string;
    image: string;
  }
  
  export default function TutorialStep({ title, description, image }: TutorialStepProps) {
    return (
      <div className="text-center animate-stepFade">
        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    );
  }