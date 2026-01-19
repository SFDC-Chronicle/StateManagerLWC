import { LightningElement } from 'lwc';
/* fromContext function will help to retrieve a reference to the shared state manager
* Child component is the consumer and parent component is the provider of the state manager
* To share a state manager instance across components, 
* all consumer components must be children of a 
* parent provider component that creates or acquires a reference to the shared state manager.
*/
import { fromContext } from '@lwc/state';
import flightbookingStateManager from 'c/flightbookingStateManager';

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
export default class AvailableFlightDetails extends LightningElement {
    
    flightbookingState = fromContext(flightbookingStateManager);
    selectedFlight = {flightName : '', price : 0, discount : 0};
    availableFlights = [];
    columns = columns;

    connectedCallback() {
        console.log('this.toCity--->'+this.flightbookingState?.value?.toCity);
        console.log('this.fromCity--->'+this.flightbookingState?.value?.fromCity);
        console.log('this.travelDate--->'+this.flightbookingState?.value?.travelDate);
        /*allFlights.forEach(flight => {
            if(flight.toCity === this.flightbookingState?.value?.toCity && flight.fromCity === this.flightbookingState?.value?.fromCity){
                console.log('Matching Flight Found: ', flight);
                this.availableFlights.push(flight);
            }
        });*/

        this.availableFlights = allFlights.filter(flight => 
            flight.toCity === this.flightbookingState?.value?.toCity &&
            flight.fromCity === this.flightbookingState?.value?.fromCity
        );
    }

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        if (selectedRows.length > 0) {
            this.selectedFlight = selectedRows[0];
            console.log('Selected Flight: ', this.selectedFlight);
            this.flightbookingState.value.setSelectedFlight(this.selectedFlight.flightName, this.selectedFlight.price, 0);
        }
    }
}