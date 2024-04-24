import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResource, chaneHTTP } from '@utils/network';
import { API_PEOPLE } from '@constants/api';
import { getPeoplePageId, getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';

const PeoplePage = ({ setErrorApi }) => {

  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {

      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img
        }
      });

      setPeople(peopleList);
      setPrevPage(chaneHTTP(res.previous));
      setNextPage(chaneHTTP(res.next));
      setCurrentPage(getPeoplePageId(url));
      setErrorApi(false);

    } else {

      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
      />
      {people && <PeopleList people={people} />}
    </>
  )
}

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
