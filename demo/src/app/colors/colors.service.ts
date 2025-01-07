import { Injectable } from '@angular/core';
import { Color } from './color';

@Injectable({ providedIn: 'root' })
export class ColorsService {
  private _colors: Color[] = [
    {
      name: 'Red',
      hex: '#FF0000',
      hls: [0, 0.5, 1],
      rgb: [255, 0, 0],
      description: 'A vibrant and bold color associated with intensity and passion.',
    },
    {
      name: 'Green',
      hex: '#00FF00',
      hls: [0.33, 0.5, 1],
      rgb: [0, 255, 0],
      description: 'A color often associated with nature and freshness.',
    },
    {
      name: 'Blue',
      hex: '#0000FF',
      hls: [0.66, 0.5, 1],
      rgb: [0, 0, 255],
      description: 'A cool and calming color often associated with the sky and ocean.',
    },
    {
      name: 'Yellow',
      hex: '#FFFF00',
      hls: [0.17, 0.5, 1],
      rgb: [255, 255, 0],
      description: 'A bright and cheerful color associated with warmth and energy.',
    },
    {
      name: 'Purple',
      hex: '#800080',
      hls: [0.75, 0.25, 0.5],
      rgb: [128, 0, 128],
      description: 'A color that combines the stability of blue and the energy of red.',
    },
    {
      name: 'Cyan',
      hex: '#00FFFF',
      hls: [0.5, 0.5, 1],
      rgb: [0, 255, 255],
      description: 'A color that represents a mix of blue and green, often associated with tranquility.',
    },
    {
      name: 'Magenta',
      hex: '#FF00FF',
      hls: [0.83, 0.5, 1],
      rgb: [255, 0, 255],
      description: 'A vibrant and intense color formed by the combination of red and blue.',
    },
    {
      name: 'Orange',
      hex: '#FFA500',
      hls: [0.1, 0.5, 1],
      rgb: [255, 165, 0],
      description: 'A warm and energetic color often associated with enthusiasm and creativity.',
    },
    {
      name: 'Brown',
      hex: '#A52A2A',
      hls: [0, 0.4, 0.2],
      rgb: [165, 42, 42],
      description: 'A earthy and neutral color often associated with stability and reliability.',
    },
    {
      name: 'Pink',
      hex: '#FFC0CB',
      hls: [0.92, 0.5, 0.9],
      rgb: [255, 192, 203],
      description: 'A soft and delicate color often associated with romance and sweetness.',
    },
    {
      name: 'Lime',
      hex: '#00FF00',
      hls: [0.33, 0.5, 1],
      rgb: [0, 255, 0],
      description: 'A bright and vibrant color associated with freshness and vitality.',
    },
    {
      name: 'Teal',
      hex: '#008080',
      hls: [0.5, 0.5, 0.25],
      rgb: [0, 128, 128],
      description: 'A color that combines the calmness of blue and the richness of green.',
    },
    {
      name: 'Navy',
      hex: '#000080',
      hls: [0.66, 0.5, 0.25],
      rgb: [0, 0, 128],
      description: 'A deep and rich color often associated with stability and sophistication.',
    },
    {
      name: 'Olive',
      hex: '#808000',
      hls: [0.17, 0.5, 0.25],
      rgb: [128, 128, 0],
      description: 'A warm and earthy color often associated with peace and harmony.',
    },
    {
      name: 'Maroon',
      hex: '#800000',
      hls: [0, 0.5, 0.25],
      rgb: [128, 0, 0],
      description: 'A deep and rich color associated with strength and endurance.',
    },
    {
      name: 'Gray',
      hex: '#808080',
      hls: [0, 0, 0.5],
      rgb: [128, 128, 128],
      description: 'A neutral and balanced color often associated with practicality and formality.',
    },
    {
      name: 'Turquoise',
      hex: '#40E0D0',
      hls: [0.48, 0.72, 0.56],
      rgb: [64, 224, 208],
      description: 'A color associated with calmness, clarity, and refreshing energy.',
    },
    {
      name: 'Gold',
      hex: '#FFD700',
      hls: [0.14, 0.5, 0.5],
      rgb: [255, 215, 0],
      description: 'A warm and precious color often associated with luxury and wealth.',
    },
    {
      name: 'Silver',
      hex: '#C0C0C0',
      hls: [0, 0, 0.75],
      rgb: [192, 192, 192],
      description: 'A metallic color associated with elegance and sophistication.',
    },
    {
      name: 'Indigo',
      hex: '#4B0082',
      hls: [0.75, 0.25, 0.25],
      rgb: [75, 0, 130],
      description: 'A deep and rich color between blue and purple often associated with mystery.',
    },
    {
      name: 'Beige',
      hex: '#F5F5DC',
      hls: [0.14, 0.56, 0.91],
      rgb: [245, 245, 220],
      description: 'A neutral and calming color often associated with simplicity and warmth.',
    },
    {
      name: 'Coral',
      hex: '#FF7F50',
      hls: [0.04, 0.66, 0.66],
      rgb: [255, 127, 80],
      description: 'A warm and lively color often associated with energy and enthusiasm.',
    },
    {
      name: 'Salmon',
      hex: '#FA8072',
      hls: [0, 0.71, 0.71],
      rgb: [250, 128, 114],
      description: 'A warm and soothing color often associated with health and comfort.',
    },
    {
      name: 'Violet',
      hex: '#EE82EE',
      hls: [0.83, 0.47, 0.72],
      rgb: [238, 130, 238],
      description: 'A soft and romantic color often associated with creativity and charm.',
    },
    {
      name: 'DarkSlateGray',
      hex: '#2F4F4F',
      hls: [0.5, 0.25, 0.25],
      rgb: [47, 79, 79],
      description: 'A deep and muted color often associated with seriousness and stability.',
    },
    {
      name: 'SlateBlue',
      hex: '#6A5ACD',
      hls: [0.69, 0.53, 0.58],
      rgb: [106, 90, 205],
      description: 'A calm and cool color often associated with depth and reliability.',
    },
    {
      name: 'Sienna',
      hex: '#A0522D',
      hls: [0.08, 0.53, 0.4],
      rgb: [160, 82, 45],
      description: 'A warm and earthy color often associated with strength and durability.',
    },
    {
      name: 'SkyBlue',
      hex: '#87CEEB',
      hls: [0.54, 0.71, 0.73],
      rgb: [135, 206, 235],
      description: 'A light and calming color often associated with openness and tranquility.',
    },
    {
      name: 'SlateGray',
      hex: '#708090',
      hls: [0.53, 0.13, 0.5],
      rgb: [112, 128, 144],
      description: 'A neutral and balanced color often associated with stability and maturity.',
    },
    {
      name: 'DarkOliveGreen',
      hex: '#556B2F',
      hls: [0.22, 0.39, 0.3],
      rgb: [85, 107, 47],
      description: 'A rich and earthy color often associated with stability and endurance.',
    },
  ];

  getAll() {
    return this._colors;
  }

  find(name: string) {
    return this._colors.find((color) => color.name === name);
  }
}
