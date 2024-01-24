import { useState } from 'react';
import { AddObjBtn } from '../AddObjBtn/AddObjBtn';
import { ColorInput } from '../ColorInput/ColorInput';
import { HeightInput } from '../HeightInput/HeightInput';
import { InfoObject } from '../InfoObject/InfoObject';
import { RadiusBottomInput } from '../RadiusBottomInput/RadiusBottomInput';
import { TopRadiusInput } from '../RadiusTopInput/RadiusTopInput';
import style from './RightPanel.module.css';

export const RightPanel = props => {
  //color
  const [color, setColor] = useState('');

  const handleColorChange = newColor => {
    setColor(newColor);
  };
  //radius Top
  const [radiusTop, setRadiusTop] = useState('');

  const handleRadiusTopChange = newRadiusTop => {
    setRadiusTop(newRadiusTop);
  };

  //radius Bottom

  const [radiusBottom, setRadiusBottom] = useState('');

  const handleRadiusBottomChange = newRadiusBottom => {
    setRadiusBottom(newRadiusBottom);
  };

  //height

  const [height, setHeight] = useState('');

  const handleHeightChange = newHeight => {
    setHeight(newHeight);
  };

  return (
    <div className={style.rightPanel}>
      <AddObjBtn
        color={color}
        radiusTop={radiusTop}
        radiusBottom={radiusBottom}
        height={height}
        addObject={props.addingObjects}
        text='add element'
      />
      <ColorInput text='color' handleChange={handleColorChange} />
      <TopRadiusInput
        text='height'
        handleTopRadiusChange={handleRadiusTopChange}
      />
      <RadiusBottomInput
        text='top radius'
        handleBottomRadiusChange={handleRadiusBottomChange}
      />
      <HeightInput
        handleHeightChange={handleHeightChange}
        text='bottom radius'
      />
      {props.objectsArray.map((card, i) => {
        return (
          <InfoObject
            isActive={props.activeInfo}
            indetificator={card.id}
            key={card.id}
          >
            Уникальный номер: {card.id}
          </InfoObject>
        );
      })}
    </div>
  );
};
