import { memo } from 'react';

import RightDataTemplate from '../../../../widgets/DataProcessor/components/template/RightDataTemplate';
import WrapperComponent from '../../../../widgets/DataProcessor/components/wrapper/DataWrapper';

const RightSectionWrapper = <T,>({ data }: { data: T[] }) => (
  <WrapperComponent<T> data={data}>
    <RightDataTemplate />
  </WrapperComponent>
);

const RightSection = memo(RightSectionWrapper) as typeof RightSectionWrapper;
export default RightSection;
