# A React application that lets you point a marker on dynamic google map and fetch all photos that are geotagged to the location.

It is fully responsive and mobile first.You can put a marker on a location by clicking. Then you can see the pcitures publically tagged at the location in FLickr.You will have different paginated gallery for the pcitures. If no tagged photos are there for a location you wil get a can't find message.

######  react-google-maps Api is used for the google map and geolocation data baesd on marker.
######  Flickr Api is used to fetch the geotagged public photos. 
###### Bootstap is used for styling.


#### Screenshots
![MainScreen](https://user-images.githubusercontent.com/22026768/107340442-c9c23300-6ae3-11eb-9f3f-7f9a62112f39.png)
![gallery](https://user-images.githubusercontent.com/22026768/107340636-02faa300-6ae4-11eb-878f-7560b13e4e71.png)
![nopic](https://user-images.githubusercontent.com/22026768/107340649-068e2a00-6ae4-11eb-9359-0de7eed8c815.png)

#### Steps to run:
1. Clone the repo
2. Create a .env.local file in root and add API keys
    2.1 REACT_APP_GOOGLE_MAPS_API_KEY variable for google maps key
    2.2 REACT_APP_FLICKR_API_KEY variable for flickr key
3. Run with npm start


