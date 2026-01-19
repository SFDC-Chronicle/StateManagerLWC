import { LightningElement, api } from 'lwc';

const columns = [
    { label: 'Flight Name', fieldName: 'flightName', type: 'text' },
    { label: 'Price', fieldName: 'price', type: 'number' }
];
const allFlights = [
    { flightName: 'Air India 101', price: 600, fromCity: 'New York', toCity: 'Delhi' },
    { flightName: 'Ethihad 201', price: 700, fromCity: 'New York', toCity: 'Delhi' },
    { flightName: 'Qatar 301', price: 710, fromCity: 'New York', toCity: 'Delhi' },   
    { flightName: 'Emirates 401', price: 800, fromCity: 'New York', toCity: 'Delhi'},
    { flightName: 'Air India 102', price: 700, toCity: 'Kolkata', fromCity: 'New York' },
    { flightName: 'Ethihad 202', price: 700, toCity: 'Kolkata', fromCity: 'New York' },
    { flightName: 'Qatar 302', price: 710, toCity: 'Kolkata', fromCity: 'New York' },   
    { flightName: 'Emirates 402', price: 800, toCity: 'Kolkata', fromCity: 'New York'},
    { flightName: 'Air India 103', price: 1000, toCity: 'Mumbai', fromCity: 'San Francisco' },
    { flightName: 'Ethihad 203', price: 1200, toCity: 'Mumbai', fromCity: 'San Francisco' },
    { flightName: 'Qatar 303', price: 1110, toCity: 'Mumbai', fromCity: 'San Francisco' },   
    { flightName: 'Emirates 403', price: 1300, toCity: 'Mumbai', fromCity: 'San Francisco'},
    { flightName: 'Air India 104', price: 600, toCity: 'Kolkata', fromCity: 'Chicago' },
    { flightName: 'Ethihad 204', price: 680, toCity: 'Kolkata', fromCity: 'Chicago' },
    { flightName: 'Qatar 304', price: 670, toCity: 'Kolkata', fromCity: 'Chicago' },   
    { flightName: 'Emirates 404', price: 760, toCity: 'Kolkata', fromCity: 'Chicago'},
];

export default class AvailableFlightDetailsOld extends LightningElement {
    @api fromCity;
    @api toCity;
    @api travelDate;
    selectedFlight = {flightName : '', price : 0, discount : 0};
    availableFlights = [];
    columns = columns;

    connectedCallback() {
        if(this.fromCity != undefined && this.fromCity != null && this.toCity != undefined && this.toCity != null){
            this.availableFlights = allFlights.filter(flight => 
                flight.toCity === this.toCity &&
                flight.fromCity === this.fromCity
            );
        }        
    }

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        if (selectedRows.length > 0) {
            this.selectedFlight = selectedRows[0];
            console.log('Selected Flight: ', this.selectedFlight);
            const selectedFlightEvent = new CustomEvent('flightselected', {
                detail: this.selectedFlight
            });
            this.dispatchEvent(selectedFlightEvent);
        }
    }

}