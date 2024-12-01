import { memo } from 'react';

import WrapperComponent from '../../../../widgets/DataProcessor/components/wrapper/DataWrapper';
import MainDataTemplate from '../../../../widgets/DataProcessor/components/template/MainDataTemplate';

const MainSectionWrapper = <T,>({ data }: { data: T[] }) => (
  <WrapperComponent<T> data={data}>
    <MainDataTemplate />
  </WrapperComponent>
);

const MainSection = memo(MainSectionWrapper) as typeof MainSectionWrapper;
export default MainSection;
