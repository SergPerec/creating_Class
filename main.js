class Storage {
	constructor(key, session, value = 'default' ) {
		this.key = key;
		this.storage = session === 'localStorage' ? localStorage : sessionStorage;
		this.set(value);
	}

	get() {
		return JSON.parse(this.storage.getItem(this.key))
	}

	set(value) {
		this.storage.setItem(this.key, JSON.stringify(value)) 
	}
	
	clear() {
		this.storage.removeItem(this.key)
	}

	isEmpty(value) {
		return !this.get(value)
	}
}

const names = new Storage('names', 'localStorage');
const city = new Storage('city', 'sessionStorage');

names.set('blblblb');
city.set(1346546);
names.clear();
names.set('123123');
console.log(names.get())
console.log(names.isEmpty())
console.log(city.get())




