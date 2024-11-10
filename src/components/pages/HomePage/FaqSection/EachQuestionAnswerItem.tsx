import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

type Props = {
  question: string;
  answer: string;
  value: string;
};

const EachQuestionAnswerItem = ({ question, answer, value }: Props) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default EachQuestionAnswerItem;
