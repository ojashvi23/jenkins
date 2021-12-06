import React,{useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
function Autoplace(props) {
 
 const[address,setaddress]= useState("")
 
 
   const handleSelect = async value=>{};

    return (
      <PlacesAutocomplete
      value={address}
      onChange={setaddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
            
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            
            {suggestions.map(suggestion => {
             
         
              const style = 
              { backgroundColor: suggestion.active  ? '#41B6E6':'#ffffff' };
                console.log(suggestion);
                localStorage.setItem("address",suggestion.description)
              return (
                <div {...getSuggestionItemProps(suggestion,{style })}>
                  
                  <span>{suggestion.description}</span>
                </div>
                
              );
            })}
          
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}


export default Autoplace