const Body = () => {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/restaurant")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {restaurants
          ? restaurants.map((res) => (
              <RestaurantCard key={res.data.id} resData={res} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
