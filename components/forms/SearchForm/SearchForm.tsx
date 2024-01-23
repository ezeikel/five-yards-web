import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchTailor from '../SearchTailorsForm/SearchTailorsForm';
import SearchFabric from '../SearchFabricsForm/SearchFabricsForm';
import SearchShop from '../SearchShopsForm/SearchShopsForm';
import { Wrapper, Heading, SearchType } from './SearchForm.styled';

const SearchForm = () => {
  const [searchType, setSearchType] = useState('tailor');
  const [heading, setHeading] = useState('');

  useEffect(() => {
    switch (searchType) {
      case 'tailor':
        setHeading('Find a tailor, locally or nationwide.');
        // setForm(SearchTailor);
        break;
      case 'fabric':
        setHeading('Find your favourite fabrics.');
        // setForm(SearchFabric);
        break;
      case 'shop':
        setHeading('Why not go directly to your favourite shop.');
        // setForm(SearchShop);
        break;
      default:
        break;
    }
  }, [searchType]);

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <hr />
      <ul>
        <SearchType
          onClick={() => setSearchType('tailor')}
          active={searchType === 'tailor'}
        >
          <FontAwesomeIcon
            icon={['fal', 'cut']}
            color={
              searchType === 'tailor'
                ? 'var(--color-primary)'
                : 'var(--color-black)'
            }
            size="2x"
          />
          Tailor
        </SearchType>
        <SearchType
          onClick={() => setSearchType('fabric')}
          active={searchType === 'fabric'}
        >
          <FontAwesomeIcon
            icon={['fal', 'layer-group']}
            color={
              searchType === 'fabric'
                ? 'var(--color-primary)'
                : 'var(--color-black)'
            }
            size="2x"
          />
          Fabric
        </SearchType>
        <SearchType
          onClick={() => setSearchType('shop')}
          active={searchType === 'shop'}
        >
          <FontAwesomeIcon
            icon={['fal', 'search']}
            color={
              searchType === 'shop'
                ? 'var(--color-primary)'
                : 'var(--color-black)'
            }
            size="2x"
          />
          Find
        </SearchType>
      </ul>
      <div>
        {searchType === 'tailor' && <SearchTailor />}
        {searchType === 'fabric' && <SearchFabric />}
        {searchType === 'shop' && <SearchShop />}
      </div>
    </Wrapper>
  );
};

export default SearchForm;
