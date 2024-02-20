import { css } from '@emotion/react';
import { colorPalette } from '../../../styles/colorPalette';
import { ChipMinus, ChipPlus } from '../../../components/Icon/SvgComponents';

interface BaseProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

type TimeChipProps = BaseProps & {
  type: 'time';
  disabled?: boolean;
};

type FieldChipProps = BaseProps & {
  type: 'field';
  disabled?: never;
};

type ToggleChipProps = TimeChipProps | FieldChipProps;

function ToggleChip({ disabled = false, type, label, selected, onClick }: ToggleChipProps) {
  return (
    <button
      css={css([
        base,
        type === 'time' ? timeStyle({ selected, disabled }) : undefined,
        type === 'field' ? fieldStyle({ selected }) : undefined,
      ])}
      onClick={onClick}
      disabled={disabled}
    >
      {selected ? <ChipMinus /> : <ChipPlus />}
      {label}
    </button>
  );
}

export default ToggleChip;

const base = css`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px 8px 10px;
  border-radius: 16px;
`;

const timeStyle = ({ selected, disabled }: Pick<ToggleChipProps, 'selected' | 'disabled'>) => css`
  ${defaultTimeStyle};
  ${selected ? selectedTimeStyle : undefined};
  ${disabled ? disabledTimeStyle : undefined};
`;

const defaultTimeStyle = css`
  height: 28px;
  border: 1px solid ${colorPalette.gray2};
  color: ${colorPalette.gray4};
`;

const selectedTimeStyle = css`
  border: 1px solid ${colorPalette.gray3};
  color: ${colorPalette.gray5};
  background-color: ${colorPalette.gray1};
`;

const disabledTimeStyle = css`
  border: 1px solid ${colorPalette.gray2};
  color: ${colorPalette.gray2};
`;

const fieldStyle = ({ selected }: Pick<ToggleChipProps, 'selected'>) => css`
  ${defaultFieldStyle};
  ${selected ? selectedFieldStyle : undefined}
`;

const defaultFieldStyle = css`
  height: 32px;
  border: 1px solid ${colorPalette.gray3};
  color: ${colorPalette.gray5};
`;

const selectedFieldStyle = css`
  border: 1px solid ${colorPalette.gray5};
  color: ${colorPalette.white};
  background-color: ${colorPalette.gray5};
`;
