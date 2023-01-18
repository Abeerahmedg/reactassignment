import React from 'react'
import axios from 'axios';

export default class Country extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CountryId: '',
      CountryData: [],
      CityData: [],
      LanguageData: []
    }
  }
  componentDidMount() {  
    axios.get('https://localhost:7031/api/react/countries').then(response => {  
            
            this.setState({  
              CountryData: response.data  
            });  
    });
    axios.get('https://localhost:7031/api/react/languages').then(res => {  
              
            this.setState({  
              LanguageData: res.data  
            });  
    });  
  } 

  ChangeCity = (e) => {  
    this.setState({ StateId: e.target.value });  
    axios.get('https://localhost:7031/api/react/cities?CountryId=' + e.target.value).then(response => {  
             
            this.setState({  
                    CityData: response.data  
            });  
    });  
  }  

  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <select className="form-control" name="country" value={this.state.CountryId} onChange={this.ChangeCity} >  
          <option>Select Country</option>  
          {this.state.CountryData.map((e, key) => {  
                  return <option key={key} value={e.countryId}>{e.countryName}</option>;  
          })}  
        </select>
        <select className="form-control" name="city" value={this.state.CityData} >  
          <option>Select City</option>  
          {this.state.CityData.map((e, key) => {  
                  return <option key={key} value={e.cityId}>{e.cityName}</option>;  
          })}  
        </select>
        <select className="form-control" name="language" value={this.state.LanguageData} >  
          <option>Select Language</option>  
          {this.state.LanguageData.map((e, key) => {  
                  return <option key={key} value={e.id}>{e.languageName}</option>;  
          })}  
        </select> 
      </div>
    )
  }
}