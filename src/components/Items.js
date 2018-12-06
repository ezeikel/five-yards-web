import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Item from './Item';
//import Pagination from './Pagination';
//import { perPage } from '../config';
import { ALL_ITEMS_QUERY } from '../apollo/queries';


const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 60px;
  margin: 0 auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        {/* <Pagination page={this.props.page} /> */}
        <Query
          query={ALL_ITEMS_QUERY}
          // pollInterval={10000}
          // variables={{
          //   skip: this.props.page * perPage - perPage
          // }}
        >
          {({data, error, loading}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ItemsList>
               {data.items.map(item => <Item key={item.id} item={item} />)}
              </ItemsList>
            );
          }}
        </Query>
        {/* <Pagination page={this.props.page} /> */}
      </Center>
    )
  }
}

export default Items;