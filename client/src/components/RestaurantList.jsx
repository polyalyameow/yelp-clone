import React, {useContext, useEffect} from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
        try{
            const response = await RestaurantFinder.get("/");
            console.log(response.data.data.restaurants)
            setRestaurants(response.data.data.restaurants)
            
        } catch (err) {

        }}
        fetchData()
    }, [])

    console.log(restaurants)

    const handleDelete = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id != id
            }))
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className='list-group'>
        <table className='table table-hover table-primary mt-5'>
            <thead>
                <tr>
                    <th scope='col'>Restaurant</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Ratings</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {restaurants && restaurants.map(restaurant => {
                    return (
                    <tr key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>Reviews</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger" onClick={() => handleDelete(restaurant.id)}>Delete</button></td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default RestaurantList