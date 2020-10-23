import { IPoint, Point } from './PointModule';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

document.getElementById('root').innerHTML = 'Result is' + point.getDistance().toString()