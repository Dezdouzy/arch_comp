'use client';

import React from 'react';
// @ts-ignore
import { useForm } from '@formspree/react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'use-intl';

function ContactForm() {
  const [state, handleSubmit] = useForm<any>('xvgpgady');
  const t=useTranslations('Contact');
  const inputStyles =
    'rounded-[var(--radius)] border-[hsl(var(--input))] bg-transparent focus:border-[hsl(var(--chart-2))] focus:ring-0 focus:outline-none transition-colors';

  return (
    <Card className="w-full lg:w-1/3 shadow-xl h-[600px] overflow-hidden bg-gray-100">
      <CardContent className="p-6 h-full flex flex-col justify-center items-center">
        {state.succeeded ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCircle2 className="w-24 h-24 text-primary" />
            <p className="text-xl text-center text-secondary">
              {t('Form.success')}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-700">{t('Form.Fields.firstName')}</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  className={`rounded-lg border-2 border-gray-300 bg-white py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${inputStyles}`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-700">{t('Form.Fields.lastName')}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  className={`rounded-lg border-2 border-gray-300 bg-white py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${inputStyles}`}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">{t('Form.Fields.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className={`rounded-lg border-2 border-gray-300 bg-white py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${inputStyles}`}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700">{t('Form.Fields.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className={`rounded-lg border-2 border-gray-300 bg-white py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${inputStyles}`}
              />
            </div>
            <div className="space-y-2 flex-grow">
              <Label htmlFor="message" className="text-gray-700">{t('Form.Fields.message')}</Label>
              <Textarea
                id="message"
                name="message"
                required
                className={`h-24 rounded-lg border-2 border-gray-300 bg-white py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${inputStyles}`}
                disabled={state.submitting}
              />
            </div>
            <Button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-bold rounded hover:bg-secondary transition duration-300"
              disabled={state.submitting}
            >
              {state.submitting ? t('Form.submittingMessage') : t('Form.buttonText')}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

export default ContactForm;
