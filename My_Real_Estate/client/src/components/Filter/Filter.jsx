import './Filter.scss'
function Filter() {
  return (
    <div className='filter'>
      <h1>Search results for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='Search Location' />
        </div>
      </div>

      <div className="bottom">

        <div className="item">
          <label htmlFor="type">Location</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
        <label htmlFor="type">Location</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='Any' />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='Any' />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" id='bedroom' name='bedroom' placeholder='Any' />
        </div>

        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter