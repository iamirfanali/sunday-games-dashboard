import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

import { defaultValues, validationSchema } from './helpers';
import { FormProps } from './types';

export default function Form({ onSubmit }: FormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            autoFocus
            fullWidth
            type="text"
            label="Campaign name"
            error={!!errors.name}
            helperText={errors?.name?.message}
            {...field}
          />
        )}
      />

      <Button type="submit" fullWidth variant="contained" color="success" sx={{ marginTop: 2 }}>
        Add
      </Button>
    </form>
  );
}
