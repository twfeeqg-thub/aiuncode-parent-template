"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  experience?: string;
}

interface TeamMembersSectionProps {
  data: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
}

const TeamMembersSection = ({ data }: TeamMembersSectionProps) => {
  if (!data || !data.members) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{data.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.members.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  {/* Placeholder icon when image is missing */}
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900">{member.name}</h3>
              <p className="text-blue-600 text-center mb-4">{member.specialty}</p>
              <p className="text-gray-600 text-center text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
