import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchIcon,
} from './Searchbar.styled';

export class Form extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const value = this.state.value.trim().toLowerCase();
    if (!value) return;

    let sameValue;
    if (this.props.prevValue === value) sameValue = true;
    this.props.submit(value, sameValue);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
          <SearchFormBtn type="submit">
            <SearchIcon />
          </SearchFormBtn>
        </SearchForm>
      </Searchbar>
    );
  }
}

Searchbar.propTypes = {
  submit: PropTypes.func,
  prevValue: PropTypes.string,
};
