export class Hero{
	constructor(
		public id			:number,
		public name			:string,
		public alterName?	:string,
		public skillIndex?	:number
	){}
}

export let SKILLS = ['code', 'think', 'make', 'eat'];