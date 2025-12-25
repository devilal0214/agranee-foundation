
import React from 'react';
import { PageHero } from '../components/PageHero';
import { FadeIn } from '../components/FadeIn';
import { STORIES } from '../constants';
import { Quote, Heart } from 'lucide-react';

export const Stories: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero 
        badge="Dignity First"
        title="Human Journeys"
        subtitle="Behind every statistic is a child who dared to hope again. These are their paths to stability."
      />

      <div className="container mx-auto px-4 sm:px-6 pb-32">
        <div className="space-y-48 mt-20">
          {STORIES.map((story, idx) => (
            <FadeIn key={story.id}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                <div className="lg:col-span-5 sticky top-32">
                  <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                    <img 
                      src={story.imageUrl} 
                      alt={story.name} 
                      className="w-full aspect-[3/4] object-cover grayscale transition-transform duration-[2000ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                      <div className="flex items-center space-x-2 text-logo-red mb-2">
                        <Heart className="w-4 h-4 fill-logo-red" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Resilience</span>
                      </div>
                      <p className="text-3xl font-bold mb-1">{story.name}, {story.age}</p>
                      <p className="text-gray-400 text-sm uppercase tracking-widest">{story.location}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center h-full py-10">
                  <Quote className="w-20 h-20 text-red-50 mb-10" />
                  
                  <section className="mb-12">
                    <h2 className="text-xs font-bold text-logo-red uppercase tracking-[0.4em] mb-6">The Challenge</h2>
                    <p className="text-gray-900 text-2xl lg:text-3xl font-medium leading-tight">
                      "{story.background}"
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
                    <div>
                      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Transformation</h2>
                      <p className="text-gray-600 leading-relaxed">
                        {story.transformation}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Looking Ahead</h2>
                      <p className="text-gray-600 leading-relaxed">
                        {story.nextSteps}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-16 w-32 h-2 bg-red-50 rounded-full" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
