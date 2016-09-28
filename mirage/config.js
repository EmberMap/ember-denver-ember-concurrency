export default function() {

  this.timing = 4000;

  this.get('/products', function(schema, request) {

    let list = [
      'Blue shirt',
      'Blue dress',
      'Blue jeans',
      'Red shirt',
      'Red pants'
    ];

    let regex = new RegExp(request.queryParams['text'], "gi");

    return list.filter((item) => {
      return item.match(regex);
    });

  });

}
