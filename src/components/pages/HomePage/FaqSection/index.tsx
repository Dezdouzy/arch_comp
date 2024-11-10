import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import EachQuestionAnswerItem from './EachQuestionAnswerItem';
import { promises as fs } from 'fs';

const FaqSection = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/data/faqData.json',
    'utf8'
  );
  const data = JSON.parse(file);

  return (
    <section id="faq" className="my-10 py-10">
      <div className="mx-auto container max-w-7xl">
        <div className="mb-10">
          <h2 className="text-center text-4xl font-bold font-serif mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600">
            Here are some of the most frequently asked questions about our
            services.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          title="What is your return policy?"
        >
          {data?.map((item: any, index: number) => {
            return (
              <EachQuestionAnswerItem
                key={index}
                value={index.toString()}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
