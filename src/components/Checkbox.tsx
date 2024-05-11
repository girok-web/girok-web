import Icon from './Icon';
import styled from '@emotion/styled';
import Text from './Text';
import { Spacing } from './Spacing';
import { useForm } from 'react-hook-form';
import { ReactNode } from 'react';

interface CheckboxProps {
  name: string;
  content?: ReactNode;
}

function Checkbox({ name, content }: CheckboxProps) {
  const { register, watch } = useForm();

  const checked = watch(name);

  return (
    <Label htmlFor={name}>
      <input id={name} {...register(name)} type="checkbox" />
      {checked ? <Icon name="checked-radio" /> : <Icon name="non-checked-radio" />}
      {content ? (
        <>
          <Spacing direction="horizontal" size={8} />
          <Text typography="body2_r" strike={checked ? true : false}>
            {content}
          </Text>
        </>
      ) : null}
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }
`;

export default Checkbox;
