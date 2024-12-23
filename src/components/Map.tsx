import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHJkZ3F3NmkwMXpvMnFsYnhsNm5mZHl4In0.JprQY1VQ8xtHXUvxBIFoLw';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Initialize map
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.006, 40.7128], // Default to NYC
        zoom: 15
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Get user location
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            
            if (!map.current) return;

            // Add marker at user location
            new mapboxgl.Marker({
              color: "#6D28D9"
            })
              .setLngLat([longitude, latitude])
              .addTo(map.current);

            // Add 500m radius circle
            map.current.addSource('radius', {
              type: 'geojson',
              data: {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [longitude, latitude]
                },
                properties: {
                  radius: 500
                }
              }
            });

            map.current.addLayer({
              id: 'radius-fill',
              type: 'circle',
              source: 'radius',
              paint: {
                'circle-radius': {
                  stops: [
                    [0, 0],
                    [20, 500]
                  ],
                  base: 2
                },
                'circle-color': '#6D28D9',
                'circle-opacity': 0.15
              }
            });

            // Center map on user location
            map.current.flyTo({
              center: [longitude, latitude],
              zoom: 15
            });
          },
          (error) => {
            console.error('Error getting location:', error);
            setError('Unable to get your location. Please enable location services.');
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    } catch (err) {
      console.error('Error initializing map:', err);
      setError('Unable to load the map. Please try again later.');
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600 p-4 text-center">
          {error}
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
        </>
      )}
    </div>
  );
};

export default Map;