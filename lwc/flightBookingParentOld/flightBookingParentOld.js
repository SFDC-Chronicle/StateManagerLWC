import { LightningElement } from 'lwc';

export default class FlightBookingParentOld extends LightningElement {
    isFlightSelected = false;
    fromCity = '';
    toCity = '';
    travelDate = '';
    showChildComponent = false;
    selectedFlight = {flightName : '', price : 0, discount : 0};

    handleShowAvailable(){
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

    handleFlightSelected(event){
        this.isFlightSelected = true;
        this.selectedFlight = event.detail;
        console.log('Flight selected in parent component: ', this.selectedFlight);
    }

}