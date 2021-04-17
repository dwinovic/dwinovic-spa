import React from 'react';
import { HeadingSection, SkillItem, SubHeadingSection } from '../../atoms';
import { SectionLayout } from '../../Layout';

export default function SkillsSection() {
  return (
    <SectionLayout addClass="bg-skill">
      <HeadingSection>Skills</HeadingSection>
      <SubHeadingSection>Beberapa Kemampuan Saya</SubHeadingSection>
      <div className="flex flex-col items-center">
        <div className="mt-10  md:w-10/12 flex flex-col md:flex-row md:space-x-7">
          <SkillItem
            skill="React JS"
            icon="/icons/ic-react.svg"
            level="advance"
          />
          <SkillItem
            skill="React JS"
            icon="/icons/ic-react.svg"
            level="advance"
          />
          <SkillItem
            skill="Node JS"
            icon="/icons/ic-nodejs.svg"
            level="advance"
          />
        </div>
        <div className="mt-10  md:w-10/12 flex flex-col md:flex-row md:space-x-7">
          <SkillItem
            skill="Node JS"
            icon="/icons/ic-nodejs.svg"
            level="advance"
          />
          <SkillItem
            skill="React JS"
            icon="/icons/ic-react.svg"
            level="advance"
          />
          <SkillItem
            skill="React JS"
            icon="/icons/ic-react.svg"
            level="advance"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
