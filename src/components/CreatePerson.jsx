import axios from "axios";
import React from "react";

export default class CreatePerson extends React.Component {
  state = {
    personname: "",
    numberOfBooks: "",
    countries: [],
    cities: [],
    country: 0,
    city: 0,
    error: ""
  };

  handleSubmit = (event) => {
    this.setState({ error: "" });
    event.preventDefault();

    if(this.state.name.length === 0|| this.state.numberOfBooks.length === 0){
      this.setState({ error: "Fields can't be empty!" });
    }

    if(this.state.city === 0 || this.state.country === 0){
      this.setState({ error: "Please choose a country and a city" });
    }

    if(this.state.error.length === 0){
    const person = {
      name: this.state.name,
      numberOfBooks: this.state.numberOfBooks,
      city: this.state.city,
      country: this.state.country,
    };
    axios
      .post(`https://localhost:7031/api/react/create`, person)
      .then((result) =>{
        console.log(result.status);
        this.props.onButtonClick()
      
      });
    }
  };

  componentDidMount() {
    axios.get(`https://localhost:7031/api/react/countries`).then((result) => {
      this.setState({ countries: result.data });
    });
  }

  getCities = (arg) => {
    this.setState({ city: 0});
    this.setState({ country: arg.target.value });
    axios
      .get(`https://localhost:7031/api/react/cities/` + arg.target.value)
      .then((result) => {
        console.log(result.data);
        this.setState({ cities: result.data });
      });
  };

  setCity = (arg) => {
    this.setState({ city: arg.target.value });
  };

  render() {
    const zero = 0;
    return (
      <div className="my-3">
        <form id="createform" onSubmit={this.handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <input
            placeholder="numberOfBooks"
            type="text"
            onChange={(e) => this.setState({ numberOfBooks: e.target.value })}
          ></input>
          <select
            name="country"
            className="form-select-sm example"
            defaultValue={"default"}
            onChange={(x) => {
              this.getCities(x);
            }}
          >
            <option disabled value="default">
              Select a country
            </option>
            {this.state.countries.map((country) => {
              return (
                <option key={country.countryId} value={country.countryId}>
                  {country.countryName}
                </option>
              );
            })}
          </select>
          <select
            name="city"
            className="form-select-sm example mx-3"
            defaultValue={zero}
            value={this.state.city}
            onChange={(y) => {
              this.setCity(y);
            }}
          >
            <option disabled value={zero}>
              Select a city
            </option>
            {this.state.cities.map((city) => {
              return (
                <option key={city.cityId} value={city.cityId}>
                  {city.cityName}
                </option>
              );
            })}
          </select>
          <button type="submit" className="btn btn-primary mx-2">
            Create
          </button>
        </form>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
