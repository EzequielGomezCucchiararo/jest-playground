test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3);
});

test('object euqal by value', () => {
	const data = {
		one: 1
	};

	data['two'] = 2;

	expect(data).toEqual({
		one: 1,
		two: 2
	});
});

test('object equal by reference', () => {
	const data = {
		one: 1
	};
	const data2 = data;

	data['two'] = 2;

	expect(data).toBe(data2);
});

test('adding positive numbers is not zero', () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0);
		}
	}
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

function fetchData(cb) {
	setTimeout(() => {
		cb('peanut butter');
	}, 1000);
}

test('(cb) the data is peanut butter', done => {
	function callback(data) {
		expect(data).toBe('peanut butter');
		done();
	}

	fetchData(callback);
});

function fetchData2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('peanut butter');
		}, 1000);
	})
}

test('(promise) the data is peanut butter', () => {
	return fetchData2().then(data => {
		expect(data).toBe('peanut butter');
	});
});

function fetchData3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('error');
		}, 1000);
	});
}

test('the fetch fails with an error', () => {
	expect.assertions(1);
	return fetchData3().catch(e => expect(e).toMatch('error'));
});