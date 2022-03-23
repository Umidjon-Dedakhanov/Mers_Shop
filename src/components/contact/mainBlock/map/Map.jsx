import React from 'react'

import style from './Map.module.css'
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl } from 'react-yandex-maps'

const YandexMap = () => (
  <div className={style.Map}>
    <YMaps className={style.Map_block}>
      <div className={style.Map_block}>
        <Map className={style.Map_block}
          defaultState={{
            center: [41.316441, 69.294861],
            zoom: 5,
            controls: [],
          }}>
          <Placemark geometry={[41.316441, 69.294861]} />
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </div>
    </YMaps>
  </div>
);
export default YandexMap;