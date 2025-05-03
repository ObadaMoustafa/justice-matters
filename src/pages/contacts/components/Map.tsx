import React, { forwardRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { motion } from 'motion/react';
import Image from '../../../components/media/Image';
import { MotionVariants } from '@/types/global';

const markerImage: string =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1731131811/NEOX/Images/location-marker_y6zt0f.png';
const MapWrapper = styled.div`
  /* overflow: hidden; */
  overflow-y: hidden;
  position: relative;
`;

const MarkerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Marker = styled(motion.create(Image))`
  width: 50px;
`;
// Animations
const markerVariants: MotionVariants = {
  initial: { y: -10, scaleX: 1, scaleY: 1 },
  animate: {
    y: 0,
    scaleX: [1, 1, 1.1],
    scaleY: [1, 1, 0.9, 0.9],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1,
      delay: 2,
    },
  },
};

type Props = {
  className?: string;
  position?: [number, number];
  address?: string;
};
const Map = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      position = [52.505499986615526, 6.090946035575811],
      address = 'Stationsplein 17, 8011 CW Zwolle',
    },
    ref
  ) => {
    const mapsLink: string = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;

    return (
      <MapWrapper ref={ref} className={className}>
        <MapContainer
          center={position}
          zoom={50}
          style={{ height: '110%', width: '100%' }}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          zoomControl={false}
          keyboard={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; <a href='https://carto.com/attributions'>CARTO</a>"
          />
        </MapContainer>
        <MarkerContainer>
          <a
            href={mapsLink}
            title="Location"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Marker
              src={markerImage}
              variants={markerVariants}
              initial="initial"
              animate="animate"
            />
          </a>
        </MarkerContainer>
      </MapWrapper>
    );
  }
);
Map.displayName = 'Map';
export default Map;
