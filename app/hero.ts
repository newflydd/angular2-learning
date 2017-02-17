export class Hero{
	//它可能看上去不像是有属性的类，但它确实有
	//利用的是 TypeScript 提供的简写形式
	//用构造函数的参数直接定义属性
	constructor(
		public id		:	number,
		public name		:	string,
		public power	: 	string,
		public alter?	:	string,
		public isSecret :	boolean = false
	){}
}