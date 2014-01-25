(function() {

buster.testCase(
  'raw',
  {
    setUp: function() {
      var size = 76543;
      var testData = new (USE_TYPEDARRAY ? Uint8Array : Array)(size);

      console.log("use typedarray:", USE_TYPEDARRAY);

      this.testData = testData;
    },

//    "uncompressed random data":
//      function() {
//        makeRandomData(this.testData);
//        rawInflateTest('random', this.testData, Zlib.RawDeflate.CompressionType.NONE);
//      },
//    "fixed random data":
//      function() {
//        makeRandomData(this.testData);
//        rawInflateTest('random', this.testData, Zlib.RawDeflate.CompressionType.FIXED);
//      },
//    "dynamic random data":
//      function() {
//        makeRandomData(this.testData);
//        rawInflateTest('random', this.testData, Zlib.RawDeflate.CompressionType.DYNAMIC);
//      },
//    "uncompressed sequential data":
//      function() {
//        makeSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.NONE);
//      },
//    "fixed sequential data":
//      function() {
//        makeSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.FIXED);
//      },
//    "dynamic sequential data":
//      function() {
//        makeSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.DYNAMIC);
//      },
//    "uncompressed random sequential data":
//      function() {
//        makeRandomSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.NONE);
//      },
//    "fixed random sequential data":
//      function() {
//        makeRandomSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.FIXED);
//      },
//    "dynamic random sequential data":
//      function() {
//        makeRandomSequentialData(this.testData);
//        rawInflateTest('sequential', this.testData, Zlib.RawDeflate.CompressionType.DYNAMIC);
//      },
    "flashtest":
      function() {
          var base64Str = 'eNp1l01uFDEQRq/CASKr/W/vQWIRKRIbjsSCNQgOgbJCYsdlUJRj4PqqJ2OXv95k3pvMtKvKLtvz8cPj49O7z0+fHt+n7HJ+aMH5B58KOILn9/P5fqSc3ZG5FBcupBHqLjDuh0uUR2yZy4juQrKrlIvrjP2R8MJtfPDS+vyQWXyimO8JG6nzmMb6POZqwd/TM5KmObJWKTbXuEQ/1d1amCq/W98t4SVmLC4mVWOl1nR9MUseBWUSKSbNg1qeYzVW0S5M2pTGIvmYs7iZ1oVbkbnM3rVNqqyzHBfqrsh3E5KeZTwuqDQr3iWRsmLE/yqKscoZe3V1t+b0b7RSin6gOyv1kPoQzq5Q7ijCxmOXaplL04ru0rHjES6oWUNus4Tj0NxQC2sB0ZSFuqYaF/ThPpFGktPJL5volqrrwlrFxI2FUK30s38l+EXCcVvMdbeAUEeTLHhurtJSRrLUTtvQiMYZkwRDJWg01A6Zq93abWMy0tAyY3yp5GbSDCPqTXD6jPx3HsXyDVPLJOiDd8EJwLhockSSpkYkoL47e0Phode3FE5EmmP5RsoZs7DygSO0Zyvy/9ZR5AW9Ht4Ljq/IQb9AzJawrFrRsi3iz6tF2UTuA4SxrJv0isFAcOQrF5q+IloG95yVEVIL6KSZMTBhpOwx0B218duhG8giCIEwxqr4qBGMRiVJ3FQktsHeMga7kEjFdzyy6iZqxV9IIzSqTFlT4nJcSJT9gQqyJSzzwngUgXGb01kFL1QqCspkTOgFB8py+jHWSWaC4+9CwoWEqdhWPOWpcgvLKU5Yl9C5kFbRwjGp92W5SbwQ1I5wJhTP5tqkYLCmJ/wq5WzhXbL28M6EkuxghFH6Czku5MDeRCTLDYmxXM4Yy12Sc8xc9DcckzOrbjm87XSWJSXvLONauvO44Prbj9Yd6+vfny8/nv/9+fXy/cvL76+vz9/+A31V+7w=';
          var compressed = decodeB64(base64Str);
        //var compressed = new Zlib.RawDeflate(data).compress();
//        var decompressed = new Zlib.RawInflate(compressed,{
//            bufferType:Zlib.RawInflate.BufferType.ADAPTIVE,
//            compressionType: Zlib.RawDeflate.CompressionType.DYNAMIC
//        }).decompress();
          var inflator = new Zlib.Inflate(compressed);
          var decompressed = inflator.decompress();
          //console.log(decompressed);
          var str = utf8.unserializeByteArray(decompressed);
//          for(var i= 0,len=decompressed.length;i<len;i++) {
//              str += String.fromCharCode(decompressed[i]);
//          }

          console.log(str);
        //buster.assert(arrayEquals(data, Array.prototype.slice.call(decompressed)));
      }
  }
);


// inflate test
function rawInflateTest(mode, testData, compressionType, inflateOption) {
  var deflate;
  var inflate;

  console.log("type:", compressionType);//if not set use Zlib.RawDeflate.CompressionType.DYNAMIC default

  // deflate
  deflate = new Zlib.RawDeflate(testData, {
    compressionType: compressionType
  }).compress();
  console.log("deflated data size:", deflate.length);

  // inflate
  if (inflateOption) {
    inflateOption.verify = true;
  } else {
    inflateOption = {verify: true};
  }
  inflate = (new Zlib.RawInflate(deflate, inflateOption)).decompress();
  console.log("inflated data size:", inflate.length)

  // assertion
  buster.assert(inflate.length, testData.length);
    buster.assert(arrayEquals(inflate, testData));
}

})();
