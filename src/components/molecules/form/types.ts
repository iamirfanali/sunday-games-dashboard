import { FormInput } from '../../../types/shared';

export interface FormProps {
  onSubmit: (data: FormInput) => void;
}
