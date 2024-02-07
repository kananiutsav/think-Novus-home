"use client"
import React, { useState } from 'react';
import { AskQuestions } from "@/interface";
import Heading from '@/allHeading/Heading';
import {  askQuestionHeading } from '@/utils/Constant';

type AskQuestionProps = {
  data: AskQuestions[];
};

const AskQuestion: React.FC<AskQuestionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordionItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
        <div>
        <Heading data={askQuestionHeading}/>
        </div>

      {data.map((item, index) => (
        <div key={item.id} className="mb-[14px] rounded-[10px] text-white p-[30px] bg-[#1A1825] ">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordionItem(index)}
          >
            <div className="text-[24px] leading-[39px] tracking-[0.74px] font-medium">
              {item.question}
            </div>
            <button className="text-white text-3xl w-[40px] h-[40px] bg-[#000] rounded-3xl leading-none">
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && (
            <div className="text-[#999999] w-[1002px] text-[24px] leading-[39px] font-[400] ">
              {item.Ans}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AskQuestion;


