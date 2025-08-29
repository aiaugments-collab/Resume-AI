import { Control } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type TResumeEditFormValues } from '../utils/form-schema';
import { useFieldArray } from 'react-hook-form';
import { PlusCircle, Trash2 } from 'lucide-react';

interface EducationProps {
  control: Control<TResumeEditFormValues>;
}

export const Education = ({ control }: EducationProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'educations'
  });

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Education</h2>
        <Button
          type='button'
          variant='outline'
          size='sm'
          onClick={() =>
            append({
              school: '',
              degree: '',
              field: '',
              description: '',
              startDate: '',
              endDate: '',
              city: ''
            })
          }
        >
          <PlusCircle className='mr-2 h-4 w-4' />
          Add Education
        </Button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className='space-y-4 rounded-lg border p-4'>
          <div className='flex justify-end'>
            <Button
              type='button'
              variant='ghost'
              size='sm'
              onClick={() => remove(index)}
            >
              <Trash2 className='h-4 w-4' />
            </Button>
          </div>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={control}
              name={`educations.${index}.school`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School/University</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations.${index}.degree`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Degree</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations.${index}.field`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Study</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations.${index}.startDate`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type='date' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations.${index}.endDate`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type='date' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`educations.${index}.city`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name={`educations.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className='min-h-[100px]'
                    {...field}
                    value={field.value ?? ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </div>
  );
};
