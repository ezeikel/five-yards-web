import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Formik } from 'formik';
import { UPDATE_ITEM_MUTATION, SINGLE_ITEM_QUERY } from '../apollo/queries';
import Spinner from './Spinner';
import Button from './styles/Button';
import Form from './styles/Form';
import FormFields from './styles/FormFields';
import FormActions from './styles/FormActions';
import FieldSet from './styles/FieldSet';
import FormInput from './styles/FormInput';
import SuccessMessage from './styles/SuccessMessage';
import { formatFormErrors } from '../utils/formatFormErrors';

class UpdateItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
        >
        {({data, loading}) => {
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for id {this.props.id}</p>;

          return (
            <Mutation
              mutation={UPDATE_ITEM_MUTATION}
              refetchQueries={[{ query: SINGLE_ITEM_QUERY, variables: { id: this.props.id} }]}
            >
              {(updateItem, { loading, error, called }) => (
                <Formik
                  initialValues={{ title: data.item.title, price: data.item.price, description: data.item.description }}
                  onSubmit={async (values, { resetForm, setErrors }) => {
                    try {
                      await updateItem({
                        variables: {
                          ...values,
                          id: this.props.id,
                          price: parseInt(values.price, 10)
                        }
                      });

                      // resetForm();
                    } catch(e) {
                      setErrors(formatFormErrors(e));
                    }
                  }}
                >
                  {({
                    isSubmitting,
                    errors,
                    touched,
                    values
                  }) => (
                    <Form>
                      <FormFields>
                        { !error && !loading && called && <SuccessMessage>Update successful!</SuccessMessage> }
                        <FieldSet>
                          <label htmlFor="title">Title</label>
                          <FormInput type="text" name="title" />
                        </FieldSet>
                        <FieldSet>
                          <label htmlFor="price">Price</label>
                          <FormInput type="number" name="price" />
                        </FieldSet>
                        <FieldSet>
                          <label htmlFor="description">Description</label>
                          <FormInput type="text" name="description" />
                        </FieldSet>
                      </FormFields>
                      <FormActions>
                        <Button type="submit" disabled={loading}>
                          <span>Sav{loading ? 'ing' : 'e'}</span> {isSubmitting && loading ? <Spinner /> : null}
                        </Button>
                      </FormActions>
                    </Form>
                  )}
                </Formik>
              )}
            </Mutation>
          )
        }}
      </Query>
    );
  }
}

export default UpdateItem;
