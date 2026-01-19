import { LightningElement } from 'lwc';
import flightbookingStateManager from 'c/flightbookingStateManager'; //import a state manager';

export default class FlightBookingParent extends LightningElement {
    isFlightSelected = false;
    fromCity = '';
    toCity = '';
    travelDate = '';
    showChildComponent = false;

    flightbookingState = flightbookingStateManager(); //Storing the return object of state manager

    handleShowAvailable(){
        //Accesing the public method of state manager to set the state values
        this.flightbookingState.value.setToCity(this.toCity); 
        this.flightbookingState.value.setFromCity(this.fromCity);
        this.flightbookingState.value.setTravelDate(this.travelDate);
        this.showChildComponent = true;
    }
    handleFromCityChange(event){
        this.fromCity = event.target.value;
    }

    handleToCityChange(event){
        this.toCity = event.target.value;
    }

    handleTravelDateChange(event){
        this.travelDate = event.target.value;
    }

}