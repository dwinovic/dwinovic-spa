import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function SkillItem({ icon, skill, level }) {
  return (
    <div className="flex w-4/12 shadow-card p-6 rounded-md ">
      <img src={icon} alt={skill} className="rounded-full mr-5" />
      <div>
        <h3 className="text-lg font-semibold">{skill}</h3>
        <p className="text-sm text-gray-400 font-semibold font-sans capitalize">
          {level}
        </p>
      </div>
    </div>
  );
}

SkillItem.propTypes = {
  icon: PropTypes.string,
  skill: PropTypes.string,
  level: PropTypes.string,
};
