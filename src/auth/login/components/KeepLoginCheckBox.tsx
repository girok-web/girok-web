import { css } from '@emotion/react';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import { useFormContext } from 'react-hook-form';
import { LoginFields } from '../../../pages/LoginPage';

export default function KeepLoginCheckBox() {
  const { register, watch } = useFormContext<LoginFields>();

  const checked = watch('keepLogin');

  return (
    <label
      css={css`
        display: flex;
        align-items: center;
        height: 17px;
        padding-left: 20px;
        cursor: pointer;
        background: ${checked ? `url(${checkboxOnIcon}) no-repeat` : `url(${checkboxOffIcon}) no-repeat`};
      `}
    >
      <input
        {...register('keepLogin', {
          onChange: () => {
            console.log('로컬 스토리지 저장');
          },
        })}
        type="checkbox"
        css={css`
          display: none;
        `}
      />
      Keep sign in
    </label>
  );
}
