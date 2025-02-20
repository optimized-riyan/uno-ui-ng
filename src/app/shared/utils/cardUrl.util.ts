import { Card, CardColor, CardValue } from '../types';

const getCardPath = (cardImg: string) => `assets/cards/${cardImg}`;
const back = getCardPath('back.svg');
const wild = getCardPath('wild.svg');
const drawFour = getCardPath('drawFour.svg');
const blue0 = getCardPath('blue0.svg');
const blue1 = getCardPath('blue1.svg');
const blue2 = getCardPath('blue2.svg');
const blue3 = getCardPath('blue3.svg');
const blue4 = getCardPath('blue4.svg');
const blue5 = getCardPath('blue5.svg');
const blue6 = getCardPath('blue6.svg');
const blue7 = getCardPath('blue7.svg');
const blue8 = getCardPath('blue8.svg');
const blue9 = getCardPath('blue9.svg');
const blueDrawTwo = getCardPath('blueDrawTwo.svg');
const blueRev = getCardPath('blueReverse.svg');
const blueSkip = getCardPath('blueSkip.svg');
const yellow0 = getCardPath('yellow0.svg');
const yellow1 = getCardPath('yellow1.svg');
const yellow2 = getCardPath('yellow2.svg');
const yellow3 = getCardPath('yellow3.svg');
const yellow4 = getCardPath('yellow4.svg');
const yellow5 = getCardPath('yellow5.svg');
const yellow6 = getCardPath('yellow6.svg');
const yellow7 = getCardPath('yellow7.svg');
const yellow8 = getCardPath('yellow8.svg');
const yellow9 = getCardPath('yellow9.svg');
const yellowDrawTwo = getCardPath('yellowDrawTwo.svg');
const yellowRev = getCardPath('yellowReverse.svg');
const yellowSkip = getCardPath('yellowSkip.svg');
const red0 = getCardPath('red0.svg');
const red1 = getCardPath('red1.svg');
const red2 = getCardPath('red2.svg');
const red3 = getCardPath('red3.svg');
const red4 = getCardPath('red4.svg');
const red5 = getCardPath('red5.svg');
const red6 = getCardPath('red6.svg');
const red7 = getCardPath('red7.svg');
const red8 = getCardPath('red8.svg');
const red9 = getCardPath('red9.svg');
const redDrawTwo = getCardPath('redDrawTwo.svg');
const redRev = getCardPath('redReverse.svg');
const redSkip = getCardPath('redSkip.svg');
const green0 = getCardPath('green0.svg');
const green1 = getCardPath('green1.svg');
const green2 = getCardPath('green2.svg');
const green3 = getCardPath('green3.svg');
const green4 = getCardPath('green4.svg');
const green5 = getCardPath('green5.svg');
const green6 = getCardPath('green6.svg');
const green7 = getCardPath('green7.svg');
const green8 = getCardPath('green8.svg');
const green9 = getCardPath('green9.svg');
const greenDrawTwo = getCardPath('greenDrawTwo.svg');
const greenRev = getCardPath('greenReverse.svg');
const greenSkip = getCardPath('greenSkip.svg');

export default function cardUrl(card: Card): string {
  if (card.value === CardValue.Back) return back;
  switch (card.color) {
    case CardColor.Black:
      switch (card.value) {
        case CardValue.ColorChange:
          return wild;
        case CardValue.PlusFour:
          return drawFour;
        default:
          throw Error('unknown card');
      }
    case CardColor.Red:
      switch (card.value) {
        case CardValue.PlusTwo:
          return redDrawTwo;
        case CardValue.Reverse:
          return redRev;
        case CardValue.Skip:
          return redSkip;
        case CardValue.Zero:
          return red0;
        case CardValue.One:
          return red1;
        case CardValue.Two:
          return red2;
        case CardValue.Three:
          return red3;
        case CardValue.Four:
          return red4;
        case CardValue.Five:
          return red5;
        case CardValue.Six:
          return red6;
        case CardValue.Seven:
          return red7;
        case CardValue.Eight:
          return red8;
        case CardValue.Nine:
          return red9;
        default:
          throw Error('unknown card');
      }
    case CardColor.Green:
      switch (card.value) {
        case CardValue.PlusTwo:
          return greenDrawTwo;
        case CardValue.Reverse:
          return greenRev;
        case CardValue.Skip:
          return greenSkip;
        case CardValue.Zero:
          return green0;
        case CardValue.One:
          return green1;
        case CardValue.Two:
          return green2;
        case CardValue.Three:
          return green3;
        case CardValue.Four:
          return green4;
        case CardValue.Five:
          return green5;
        case CardValue.Six:
          return green6;
        case CardValue.Seven:
          return green7;
        case CardValue.Eight:
          return green8;
        case CardValue.Nine:
          return green9;
        default:
          throw Error('unknown card');
      }
    case CardColor.Blue:
      switch (card.value) {
        case CardValue.PlusTwo:
          return blueDrawTwo;
        case CardValue.Reverse:
          return blueRev;
        case CardValue.Skip:
          return blueSkip;
        case CardValue.Zero:
          return blue0;
        case CardValue.One:
          return blue1;
        case CardValue.Two:
          return blue2;
        case CardValue.Three:
          return blue3;
        case CardValue.Four:
          return blue4;
        case CardValue.Five:
          return blue5;
        case CardValue.Six:
          return blue6;
        case CardValue.Seven:
          return blue7;
        case CardValue.Eight:
          return blue8;
        case CardValue.Nine:
          return blue9;
        default:
          throw Error('unknown card');
      }
    case CardColor.Yellow:
      switch (card.value) {
        case CardValue.PlusTwo:
          return yellowDrawTwo;
        case CardValue.Reverse:
          return yellowRev;
        case CardValue.Skip:
          return yellowSkip;
        case CardValue.Zero:
          return yellow0;
        case CardValue.One:
          return yellow1;
        case CardValue.Two:
          return yellow2;
        case CardValue.Three:
          return yellow3;
        case CardValue.Four:
          return yellow4;
        case CardValue.Five:
          return yellow5;
        case CardValue.Six:
          return yellow6;
        case CardValue.Seven:
          return yellow7;
        case CardValue.Eight:
          return yellow8;
        case CardValue.Nine:
          return yellow9;
        default:
          throw Error('unknown card');
      }
    default:
      throw Error('unknown color');
  }
}
