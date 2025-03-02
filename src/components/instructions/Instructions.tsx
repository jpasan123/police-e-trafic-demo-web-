import { useState } from 'react';
import InstructionCard from './InstructionCard';
import { instructionCategories } from './instructionData';
import '../../utils/animations.css'; // Fixed import path

export default function Instructions() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="instructions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-12 animate-slideUp">
          How to Use eTraffic App
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {instructionCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructionCategories[activeCategory].steps.map((step, index) => (
            <InstructionCard
              key={step.title}
              {...step}
              number={index + 1}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}