import { css } from '@emotion/react';
import { typographyMap } from '../../../styles/typography';
import SignForm from '../../SignForm';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../shared/Spacing';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { postResetVerification, postResetVerificationCheck } from '../remotes/query';
import { ResetFields } from '../../../pages/ResetPage';

interface ResetVerificationProps {
  nextStep: () => void;
}

export default function ResetVerification({ nextStep }: ResetVerificationProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const email = watch('email');

  const submitVerificationCode: SubmitHandler<ResetFields> = ({ email, verificationCode }) => {
    postResetVerificationCheck({ email, verificationCode }).then(() => {
      nextStep();
    });
  };

  return (
    <SignForm onSubmit={handleSubmit(submitVerificationCode)}>
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Check your mailbox." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.verificationCode?.message}>
        <SignForm.Input
          {...register('verificationCode', {
            required: true,
          })}
          placeholder="Verification code"
          hasError={!!errors.verificationCode}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button type="submit">Next</SignForm.Button>
      <Spacing size={24} />
      <button
        type="button"
        onClick={() => {
          postResetVerification({ email });
        }}
        css={css([typographyMap.smallBody, { color: colorPalette.darkGray }])}
      >
        <img
          src={envelopeBlackIcon}
          css={css({
            marginRight: 8,
          })}
        />
        Resend authentication number
      </button>
    </SignForm>
  );
}
