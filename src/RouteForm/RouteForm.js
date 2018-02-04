import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppForm from '../AppForm/AppForm';

class RouteForm extends Component {
  render() {
    const {name, description, image, id, router } = this.props;

    return (
      <main className="route-form">
        <section className="route-form__container">

          <header className="route-form__header">
            <div className="route-form__image-wrapper">
              <img className="route-form__image" src={image} alt={name}/>
            </div>
            <h1 className="route-form__name">{name}</h1>
            <p className="route-form__descrition">{description}</p>
          </header>

          <AppForm id={id} />

          <footer className="route-form__footer">
            <button className="route-form__go-back" onClick={router.goBack}>Go Back</button>
          </footer>

        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.params.id;

  let formInfo;

  state.formsInfo.forEach(info => {
    if (info.id === +id) {
     formInfo = info;
    }
  });

  return {
    ...formInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);


RouteForm.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number
};
