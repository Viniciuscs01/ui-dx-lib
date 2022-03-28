import React from 'react'
import './Button.css'

import 'devextreme/dist/css/dx.light.css';

import { Button } from 'devextreme-react/button';
export interface ButtonProps {
  label: string;
}

const Btn = (props: ButtonProps) => {
  return <Button text="DX BTN" />;
};

export default Btn;