
const faker = require('faker');
const fs = require('fs');
const pictureURL = `https://mysdcphotos.s3-us-west-1.amazonaws.com/photo/File+`



//let getRandomArbitrary = Math.floor(Math.random() * (763 - 1) + 1);

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './fakeData/homes7.csv',
  header:[
    {id:'id', title: 'id'},
    {id:'address', title: 'address'},
    {id:'zipCode', title: 'zipCode'},
    {id:'onMarket', title: 'onMarket'},
    {id:'sqft', title: 'sqft'},
    {id:'bedCount', title: 'bedCount'},
    {id:'bathCount', title: 'bathCount'},
    {id:'listingValue', title: 'listingValue'},
    {id:'pictureUrl', title: 'pictureUrl'}
  ]
});


let homesProperties = [];

let numberOfHomes = 10000000
>>>>>>> d7240220fb23ddde9f2423545d6260bf1f1f220d
;

const generateData = () => {
  for (var i = 5000002; i <= numberOfHomes; i++) {
    const randomurl = faker.random.number({min:1, max:750})
    const address = faker.fake(`{{address.streetAddress}}, {{address.city}}, {{address.state}}`);
    const zipCode = faker.address.zipCode().slice(0, 5);
    const onMarket = faker.random.boolean();
    const sqft = faker.random.number({ min: 500, max: 10000 });
    const bedCount = faker.random.number({ min: 1, max: 10 });
    const bathCount = faker.random.number({ min: 1, max: 10 });
    const listingValue = faker.random.number({ min: 200000, max: 5000000 });
    const pictureUrl = `${pictureURL}${randomurl}.jpg`;
    
    let homesProperty = {
      id: i,
      address: address,
      zipCode: zipCode,
      onMarket: onMarket,
      sqft: sqft,
      bedCount: bedCount,
      bathCount: bathCount,
      listingValue: listingValue,
      pictureUrl: pictureUrl
    };

    homesProperties.push(homesProperty);
  }
  return homesProperties;
}

var startTime = new Date().getTime();
csvWriter.writeRecords(generateData())       
  .then(() => {
    var endTime = new Date().getTime();
    console.log((endTime - startTime) + "ms");
    console.log('...successfully did csv!');
  }).catch(() => {
    console.log('failed to wirte csv');
  });































// const addresses = {
//   address: [],
//   zipCode: [],
//   on_market: [],
//   sqft: [],
//   bed: [],
//   bath: [],
//   addressesTableData: '',
//   currentEstimatedValue: [],
//   picture: [],
// };

// const valueHistory = {
//   address: [],
//   date: [],
//   homeValue: [],
//   areaValue: [],
//   cityValue: [],
//   centralValue: [],
//   estimatedValueHistoryTableData: '',
// };

// const numberOfHouses = 1000;
// const numberOfValuesPerHouse = 1000;

// for (let i = 0; i < numberOfHouses; i += 1) {
//   const streetAddress = faker.address.streetAddress();
//   const streetName = faker.address.streetName();
//   const city = faker.address.city();
//   const state = faker.address.state();
//   const zipCode = faker.address.zipCode();
//   addresses.address.push(`${streetAddress} ${streetName}, ${city}, ${state}, ${zipCode}`);
//   addresses.zipCode.push(zipCode.slice(0, 5));
//   addresses.on_market.push(faker.random.boolean());
//   addresses.sqft.push(faker.random.number({ min: 200, max: 7000 }));
//   addresses.bed.push(faker.random.number({ min: 0, max: 10 }));
//   addresses.bath.push(faker.random.number({ min: 1, max: 10 }));
//   addresses.picture.push(`${pictureURL}${i + 1}.jpg`);
//   valueHistory.address.push(addresses.address[i]);
//   valueHistory.date.push([]);
//   valueHistory.homeValue.push([]);
//   valueHistory.areaValue.push([]);
//   valueHistory.cityValue.push([]);
//   if (i === 0) {
//     valueHistory.centralValue.push(200000);
//   } else if (i % 10 === 0) {
//     valueHistory.centralValue.push(valueHistory.centralValue[i - 1] * (102 / 100));
//   } else {
//     valueHistory.centralValue.push(valueHistory.centralValue[i - 1]);
//   }
//   for (let j = 0; j < numberOfValuesPerHouse; j += 1) {
//     const date = faker.date.between('1/1/2010', '1/1/2020');
//     const convertedDate = `${(new Date(date)).getFullYear()}-${(new Date(date)).getMonth() + 1}-${(new Date(date)).getDate()}`;
//     valueHistory.date[i].push(convertedDate);
//     if (j === 0) {
//       valueHistory.homeValue[i].push(faker.random.number({
//         min: valueHistory.centralValue[i] * (98 / 100),
//         max: valueHistory.centralValue[i] * (102 / 100),
//       }));
//     } else if (j % 10 === 0) {
//       valueHistory.homeValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j - 1] * (98 / 100),
//         max: valueHistory.homeValue[i][j - 1] * (102 / 100),
//       }));
//       valueHistory.areaValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j] * (96 / 100),
//         max: valueHistory.homeValue[i][j] * (104 / 100),
//       }));
//       valueHistory.cityValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j] * (94 / 100),
//         max: valueHistory.homeValue[i][j] * (106 / 100),
//       }));
//     } else {
//       valueHistory.homeValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j - 1] * (99.98 / 100),
//         max: valueHistory.homeValue[i][j - 1] * (100.02 / 100),
//       }));
//       valueHistory.areaValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j] * (99.98 / 100),
//         max: valueHistory.homeValue[i][j] * (100.02 / 100),
//       }));
//       valueHistory.cityValue[i].push(faker.random.number({
//         min: valueHistory.homeValue[i][j] * (99.98 / 100),
//         max: valueHistory.homeValue[i][j] * (100.02 / 100),
//       }));
//     }
//   }
// }
// for (let i = 0; i < numberOfHouses; i += 1) {
//   valueHistory.date[i].sort(-1);
//   addresses.currentEstimatedValue.push(valueHistory.homeValue[numberOfValuesPerHouse - 1][i]);
//   addresses.addressesTableData += `"\\N"\t${addresses.address[i]}\t${addresses.zipCode[i]}\t${addresses.on_market[i]}\t${addresses.sqft[i]}\t${addresses.bed[i]}\t${addresses.bath[i]}\t${addresses.currentEstimatedValue[i]}\t${addresses.picture[i]}\n`;
//   for (let j = 0; j < numberOfValuesPerHouse; j += 1) {
//     valueHistory.estimatedValueHistoryTableData += `"\\N"\t${valueHistory.address[i]}\t${valueHistory.date[i][j]}\t${valueHistory.homeValue[j][i]}\t${valueHistory.areaValue[j][i]}\t${valueHistory.cityValue[j][i]}\t\n`;
//   }
// }

// fs.writeFile('addressTableData.txt', addresses.addressesTableData, 'utf8');
// fs.writeFile('estimatedValueHistoryTableData.txt', valueHistory.estimatedValueHistoryTableData, 'utf8');
