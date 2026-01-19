import {defineState} from "@lwc/state"

/* `defineState` function will help you to define the values and actions your state manager provides */

const flightbookingStateManager = defineState(
    /* This is an anonymous JavaScript function. 
    * This helps to implement the state manager logic
    * `atom`, `computed`, and `setAtom` are state management functions 
    * available in the context of `defineState`. 
    */

    /*
    * State Manager can accept any numbers of arguments
    * { atom, computed, setAtom } this is a manadatory argument of type object and
    * should be the first argument passed to the function.
    * After that you can define your own arguments if needed using comma separator
    */
   //({ atom, computed, setAtom }, defaultToCity, defaultFromCity) => {
  ({ atom, computed, setAtom }) => {

    /*
    * You can create as many variable you want that holds the state values
    * An `atom` represents a reactive variable.
    * It can be a simple value like string, number, boolean or complex value like object or array.
    * Changes to an atom trigger updates in components or re-computation of derived values.
    */
    const toCity = atom('');
    //const toCity = atom(defaultToCity);
    const fromCity = atom('');
    //const fromCity = atom(defaultFromCity);
    const travelDate = atom(new Date());
    const isFlightSelected = atom(false);
    const selectedFlight = atom({flightName : '', price : 0, discount : 0});    

    //Set ToCity
    // setAtom action help to modify the state i.e. value of an variable created using atom
    // Actions can return a value of any type, or no value
    const setToCity = (newTocity) => {
        setAtom(toCity, newTocity);
    };

    //Set FromCity
    const setFromCity = (newFromCity) => {
        setAtom(fromCity, newFromCity);
    };

    //Set Travel Date
    const setTravelDate = (newTravelDate) => {
        setAtom(travelDate, newTravelDate);
    };

    //Set ToCity
    const setSelectedFlight = (newflightName, newPrice, newDiscount) => {
        let newSelectedFlight  = {flightName : newflightName, price : newPrice, discount : newDiscount};
        setAtom(selectedFlight, newSelectedFlight);
        setAtom(isFlightSelected, true);
    };

    // Create computed (derived) value
    const taxAmount = computed([selectedFlight], (taxPrice) => (taxPrice.price) * 1.05); // 5% tax

    /* Return an object that defines the public API of flightbookingStateManager
    * You can define as many variables you want within the method but none of them is public
    * unless you return them as part of the object below.
    * Only the variables and methods returned below will be public and accessible to the other components
    * Other components access this public API via the value element of the state manager instance
    */
    return {
        toCity,
        fromCity,
        travelDate,
        selectedFlight,
        isFlightSelected,
        taxAmount,
        setToCity,
        setFromCity,
        setTravelDate,
        setSelectedFlight
    };

  },
);

/* The flightbookingStateManager contains the return value of defineState function
* defineState() is State management function provided by LWC framework
* this exports will help you to use the state manager in other components
 */
export default flightbookingStateManager;
