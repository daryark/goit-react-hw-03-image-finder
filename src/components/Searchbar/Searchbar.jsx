import { Component } from 'react';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  // SearchFormInput,
  // SearchFormLabel,
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

    this.props.submit(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Searchbar>
        {/* <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
        </form> */}
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <span>Search</span>
          </SearchFormBtn>

          <input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
        {/* <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn>
            <span class="button-label">Search</span>
          </SearchFormBtn>
          <SearchFormLabel>
            <SearchFormInput
            value= {this.state.value}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </SearchFormLabel>
        </SearchForm> */}
      </Searchbar>
    );
  }
}
