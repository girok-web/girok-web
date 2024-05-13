import { css } from '@emotion/react';
import { colorPalette } from '../../../styles/colorPalette';
import styled from '@emotion/styled';
import { convertHourHandToMinuteHand } from '../utils/convertTime';

type TimePickerMode = 'hour' | 'minute';

interface TimePickerProps {
  mode: TimePickerMode;
  hour: number;
  minute: number;
  onHourChange: (hourHand: TimePickerProps['hour']) => void;
  onMinuteChange: (minuteHand: TimePickerProps['minute']) => void;
}

function TimePicker({ hour: hourHand, minute: minuteHand, mode, onHourChange, onMinuteChange }: TimePickerProps) {
  const handleClickHourPicker = (hourHand: number) => {
    if (mode === 'hour') {
      onHourChange(hourHand);
    }
    if (mode === 'minute') {
      onMinuteChange(convertHourHandToMinuteHand(hourHand));
    }
  };

  return (
    <Container>
      <Clock>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
          <HourBox key={hour} hour={hour}>
            <HourPicker
              hour={hour}
              onClick={() => handleClickHourPicker(hour)}
              css={css([
                hourHand === hour && (mode === 'hour' ? modeSelected : nonModeSelected),
                minuteHand === convertHourHandToMinuteHand(hour) &&
                  (mode === 'minute' ? modeSelected : nonModeSelected),
                hourHand === hour && minuteHand === convertHourHandToMinuteHand(hourHand) && modeSelected,
              ])}
            >
              {hour}
            </HourPicker>
          </HourBox>
        ))}
      </Clock>
      <MinuteIndicator mode={mode} minuteHand={minuteHand} />
      <HourIndicator mode={mode} hourHand={hourHand} />
      <CenterDot />
    </Container>
  );
}

export default TimePicker;

const Container = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
`;

const Clock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border: 2px solid ${colorPalette.gray1};
  border-radius: 50%;
  position: relative;
`;

const HourBox = styled.div<{ hour: TimePickerProps['hour'] }>`
  position: absolute;
  left: 72px;
  width: 32px;
  height: 32px;

  transform: ${({ hour }) => `rotate(calc(${hour - 3} * 30deg))`} translateX(68px);
`;

const HourPicker = styled.button<{ hour: TimePickerProps['hour'] }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  transform: ${({ hour }) => `rotate(calc(${hour - 3} * -30deg))`};
`;

const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colorPalette.black};
  transform: translate(-50%, -50%);
`;

const HourIndicator = styled.div<{ mode: TimePickerMode; hourHand: TimePickerProps['hour'] }>`
  position: absolute;
  top: 50%;
  transform-origin: left center;

  width: 36px;
  left: calc(50% + 18px);

  transform: translate(-50%, -50%) ${({ hourHand }) => `rotate(calc(${hourHand - 3} * 30deg))`};
  border: 1px solid ${({ mode }) => (mode === 'hour' ? colorPalette.black : colorPalette.gray2)};
`;

const MinuteIndicator = styled.div<{ mode: TimePickerMode; minuteHand: TimePickerProps['minute'] }>`
  position: absolute;
  top: 50%;
  transform-origin: left center;

  width: 48px;
  left: calc(50% + 24px);

  transform: translate(-50%, -50%) ${({ minuteHand }) => `rotate(calc(${minuteHand + 45} * 6deg))`};
  border: 1px solid ${({ mode }) => (mode === 'minute' ? colorPalette.black : colorPalette.gray2)};
`;

const modeSelected = css`
  color: ${colorPalette.white};
  background-color: ${colorPalette.black};
  border: none;
`;

const nonModeSelected = css`
  border: 1.5px solid ${colorPalette.gray2};
`;
