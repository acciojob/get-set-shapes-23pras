//complete this code
class Rectangle {
	constructor(width: number, height: number){
		this._width  = width();
		this._height = height();
	}

	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea():number{
		let area = this._width*this._height;
		return area;
	}
	perimeter(){
		let peri = 2*( this._width + this._height);
		return peri;
	}
}

class Square extends Animal {
  constructor(side:number){
	  super(side,side);
  }
  area(){
		let area = this._side*this._side;
		return area;
	}
	getPerimeter(){
		let peri = 4*(this._side);
		return peri;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
