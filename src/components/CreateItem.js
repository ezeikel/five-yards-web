import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { Formik } from 'formik';
import { CREATE_ITEM_MUTATION } from '../apollo/queries'
import Spinner from './Spinner';
import Button from './styles/Button';
import Form from './styles/Form';
import FormFields from './styles/FormFields';
import FormActions from './styles/FormActions';
import FieldSet from './styles/FieldSet';
import FormInput from './styles/FormInput';
import { formatFormErrors } from '../utils/formatFormErrors';

class CreateItem extends Component {
  state = {
    image: '',
    largeImage: ''
  };

  componentDidMount() {
    document.querySelector('.image').onchange = e => {
      this.uploadFile(e);
    };
  }

  uploadFile = async e => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'catchthedrop');

    const res = await fetch('https://api.cloudinary.com/v1_1/ezeikelpemberton/image/upload', {
      method: 'POST',
      body: data
    });

    const file = await res.json();

    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  }

  render() {
    const { history } = this.props;
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
      >
        {(createItem, { error, loading, called }) => (
          <Formik
            initialValues={{ title: 'Yeezy Boost', description: 'The coolest pair of Yeezys EVER!', image: '', largeImage: '', price: 0 }}
            // validationSchema={}
            onSubmit={async (values, { resetForm, setErrors }) => {
              try {
                const res = await createItem({
                  variables: {
                    ...values,
                    price: parseInt(values.price, 10),
                    image: this.state.image,
                    largeImage: this.state.largeImage
                  }
                });

                resetForm();

                // TODO: Create item page and component to redirect to from here
                history.push({
                  pathname: '/item',
                  search: `?id=${res.data.createItem.id}`
                });
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
                  <FieldSet>
                    <label htmlFor="file">Image</label>
                    <FormInput className="image" type="file" name="image" placeholder="Upload an image" required />
                    {values.image && <img className="previewImage" width="200" src={this.state.image} alt="Upload preview" />}
                  </FieldSet>
                  <FieldSet>
                    <label>Title</label>
                    <FormInput type="text" name="title" />
                  </FieldSet>
                  <FieldSet>
                    <label>Price</label>
                    <FormInput type="text" name="price" />
                  </FieldSet>
                  <FieldSet>
                    <label>Description</label>
                    <FormInput type="text" name="description" />
                  </FieldSet>
                </FormFields>
                <FormActions>
                  <Button type="submit" disabled={loading}>
                    <span>Submit</span> {isSubmitting && loading ? <Spinner /> : null}
                  </Button>
                </FormActions>
              </Form>
            )}
          </Formik>

        )}
      </Mutation>
    );
  }
}

export default withRouter(CreateItem);
