import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoverProcessorWrapperHeader from '../../../widgets/DataProcessor/components/Header/CoverProcessorWrapperHeader';
import CoverProcessorWrapper from '../../../widgets/DataProcessor/components/wrapper/CoverProcessorWrapper';
import MainSection from './sectionDataRenders/MainSection';
import { AppDispatch, RootState } from '../../../store';
import { movieReducers } from '../../../helpers/reducersByTitle';
import { KnowForData } from '../../../types/dataTypes';
import { sliceFirstTenResultsFromData } from '../../../helpers/sliceData';
import RightSection from './sectionDataRenders/RightSection';
import { SELECTED_HOME_PAGE_BUTTONS } from '../config';

const HomePageMoviesWidgetTop: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState(
    SELECTED_HOME_PAGE_BUTTONS.movies
  );
  const mainSectionTitle =
    selectedButton === SELECTED_HOME_PAGE_BUTTONS.movies
      ? 'Now playing Movies'
      : 'Trending Tv Series';
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

  const { results: nowPlayingMovies } = useSelector(
    (state: RootState) => state.movie.listOfNowPlayingMovies.listOfMovies
  );
  const { results: upcomingMovies } = useSelector(
    (state: RootState) => state.movie.listOfUpcomingMovies.listOfMovies
  );
  const { results: fullListOfTvs } = useSelector(
    (state: RootState) => state.movie.listOfTvs.listOfTvs
  );
  const renderedData = useMemo(
    () => (selectedButton === 'movies' ? nowPlayingMovies : fullListOfTvs),
    [fullListOfTvs, nowPlayingMovies, selectedButton]
  );

  const slicedUpcomingMovies = useMemo(
    () =>
      sliceFirstTenResultsFromData<KnowForData, 'vote_average'>(
        upcomingMovies,
        'vote_average'
      ),
    [upcomingMovies]
  );

  useEffect(() => {
    if (selectedButton === "tv's" && fullListOfTvs.length <= 1)
      dispatch(movieReducers.allTvs(1));
    if (selectedButton === 'movies' && nowPlayingMovies.length <= 1)
      dispatch(movieReducers.nowPlayingMovies(1));
    if (upcomingMovies.length <= 1) dispatch(movieReducers.upcomingMovies(1));
  }, [
    dispatch,
    selectedButton,
    nowPlayingMovies.length,
    upcomingMovies.length,
    fullListOfTvs.length,
  ]);

  return (
    <div>
      <CoverProcessorWrapperHeader
        headerTitle={mainSectionTitle}
        buttons={buttons}
      />
      <CoverProcessorWrapper
        mainSectionChild={<MainSection<KnowForData> data={renderedData} />}
        rightSectionChild={
          <RightSection<KnowForData> data={slicedUpcomingMovies} />
        }
        rightWrapperTitle="Upcoming Movies"
        rightButtonTitle="More"
      />
    </div>
  );
};

export default HomePageMoviesWidgetTop;
