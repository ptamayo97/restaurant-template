const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/exampleDB');

const exampleSeed = [
	{
		field1: 'Example text1',
		field2: 'Example text2',
		field3: 'Example text3'
	}
];

db.Example
	.remove({})
	.then(() => db.Example.collection.insertMany(exampleSeed))
	.then((data) => {
		console.log(data.result.n + ' datas inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
//does this not need to be exported?
