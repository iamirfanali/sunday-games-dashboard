import * as yup from 'yup';

export const defaultValues = {
  name: '',
  id: Math.random() * 100,
  installs: [
    {
      day: 'Day 1',
      value: 20,
    },
    {
      day: 'Day 2',
      value: 78,
    },
    {
      day: 'Day 3',
      value: 92,
    },
    {
      day: 'Day 4',
      value: 101,
    },
    {
      day: 'Day 5',
      value: 108,
    },
    {
      day: 'Day 6',
      value: 306,
    },
    {
      day: 'Day 7',
      value: 210,
    },
  ],
};

export const validationSchema = yup
  .object({
    name: yup.string().required('Campaign name is required'),
  })
  .required();
