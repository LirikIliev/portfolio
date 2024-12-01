import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RightSectionWrapper from './sectionDataRenders/RightSection';
import CoverProcessorWrapper from '../../../widgets/DataProcessor/components/wrapper/CoverProcessorWrapper';
import CoverProcessorWrapperHeader from '../../../widgets/DataProcessor/components/Header/CoverProcessorWrapperHeader';
import MainSection from './sectionDataRenders/MainSection';
import { KnowForData } from '../../../types/dataTypes';
import { AppDispatch, RootState } from '../../../store';
import { movieReducers } from '../../../helpers/reducersByTitle';
import { sliceFirstTenResultsFromData } from '../../../helpers/sliceData';
import { SELECTED_HOME_PAGE_BUTTONS } from '../config';
import { getListOfOnTheAirTvs } from '../../../store/Slices/onTheAirTvsSlice/getListOfOnTheAirTvs';

interface MovieWidgetInterface {
  title: string;
}

const HomePageMoviesWidgetBottom: React.FC<MovieWidgetInterface> = ({
  title,
}) => {
  const [selectedButton, setSelectedButton] = useState(
    SELECTED_HOME_PAGE_BUTTONS.movies
  );
  const buttons = [
    {
      title: 'Movie',
      onClickEvent: () => setSelectedButton(SELECTED_HOME_PAGE_BUTTONS.movies),
    },
    {
      title: "tv's",
      onClickEvent: () => setSelectedButton(SELECTED_HOME_PAGE_BUTTONS["tv's"]),
    },
  ];
  const dispatch = useDispatch<AppDispatch>();
  const { results: popularMovies } = useSelector(
    (state: RootState) => state.movie.popularMoviesData.listOfMovies
  );
  const { results: topMovies } = useSelector(
    (state: RootState) => state.movie.listOfTopMovies.listOfMovies
  );
  const { results: onTheAirTvs } = useSelector(
    (state: RootState) => state.movie.listOfOnTheAirTvs.listOfTvs
  );

  const slicedTopMovies = useMemo(
    () =>
      sliceFirstTenResultsFromData<KnowForData, 'vote_average'>(
        topMovies,
        'vote_average'
      ),
    [topMovies]
  );

  const renderedData = useMemo(
    () =>
      selectedButton === SELECTED_HOME_PAGE_BUTTONS.movies
        ? topMovies
        : onTheAirTvs,
    [onTheAirTvs, selectedButton, topMovies]
  );

  useEffect(() => {
    if (
      selectedButton === SELECTED_HOME_PAGE_BUTTONS.movies &&
      popularMovies.length <= 1
    )
      dispatch(movieReducers.popularMovies(1));
    if (
      selectedButton === SELECTED_HOME_PAGE_BUTTONS["tv's"] &&
      onTheAirTvs.length <= 1
    )
      dispatch(getListOfOnTheAirTvs(1));
    if (topMovies.length <= 1) dispatch(movieReducers.topMovies(1));
  }, [
    dispatch,
    selectedButton,
    popularMovies.length,
    topMovies.length,
    onTheAirTvs.length,
  ]);

  return (
    <div>
      <CoverProcessorWrapperHeader headerTitle={title} buttons={buttons} />
      <CoverProcessorWrapper
        mainSectionChild={<MainSection<KnowForData> data={renderedData} />}
        rightSectionChild={
          <RightSectionWrapper<KnowForData> data={slicedTopMovies} />
        }
        rightWrapperTitle="Top Movies"
        rightButtonTitle="More"
      />
    </div>
  );
};

export default HomePageMoviesWidgetBottom;
