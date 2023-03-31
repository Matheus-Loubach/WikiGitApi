import{ ChangeEvent } from 'react';


export interface IIpunt {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}