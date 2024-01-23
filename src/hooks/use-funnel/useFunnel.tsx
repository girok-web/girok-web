import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Funnel, FunnelProps, Step } from './Funnel';
import { NonEmptyArray } from '../../models/utils/NonEmptyArray';
import assert from '../../utils/assert';

type RouteFunnelProps<Steps extends NonEmptyArray<string>> = Omit<FunnelProps<Steps>, 'steps' | 'step'>;

const DEFAULT_STEP_QUERY_KEY = 'funnel-step';

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  options?: {
    stepQueryKey?: string;
    initialStep?: Steps[number];
  },
) => {
  const navigate = useNavigate();
  const location = useLocation();

  const stepQueryKey = options?.stepQueryKey ?? DEFAULT_STEP_QUERY_KEY;

  assert(steps.length > 0, 'steps가 비어있습니다.');

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<Steps>) {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const step = useQueryParam<Steps[number]>(stepQueryKey) ?? options?.initialStep;

          assert(
            step != null,
            `표시할 스텝을 ${stepQueryKey} 쿼리 파라미터에 지정해주세요. 쿼리 파라미터가 없을 때 초기 스텝을 렌더하려면 useFunnel의 두 번째 파라미터 options에 initialStep을 지정해주세요.`,
          );

          return <Funnel<Steps> steps={steps} step={step} {...props} />;
        },
        {
          Step,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setStep = useCallback(
    (step: Steps[number]) => {
      const url = `${location.pathname}?${stepQueryKey}=${step}`;

      navigate(url);
    },
    [navigate, location, stepQueryKey],
  );

  return [FunnelComponent, setStep] as const;
};

// useQueryParam
interface Options<T> {
  parser?: (val: string) => T;
  required?: boolean;
}

export function useQueryParam<T = string>(name: string): T | undefined;
export function useQueryParam<T = string>(name: string, options: Options<T> & { required: true }): T;
export function useQueryParam<T = string>(name: string, options: Options<T>): T | undefined;
export function useQueryParam<T = string>(name: string, options?: Options<T>) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get(name);

  assert(options?.required !== true || value != null, `${name} is required`);

  if (options?.parser != null && value != null) {
    return options.parser(value);
  }

  return value;
}
