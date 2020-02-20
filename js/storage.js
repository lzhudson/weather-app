class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Tampa';
    this.defaultState = 'US';
  }
  getLocationData() {
  if(localStorage.getItem('city') === '') {
      this.city = this.defaultCity;
  } else {
    this.city = localStorage.getItem('city');
  }
  if(localStorage.getItem('state') === '') {
    this.state = this.defaultState;
  } else {
    this.state = localStorage.getItem('state');
  }
    
    return {
      city: this.city,
      state: this.state,
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}