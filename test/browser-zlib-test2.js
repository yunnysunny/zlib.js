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
    "decompressTest":
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

          //console.log(str);
        //buster.assert(arrayEquals(data, Array.prototype.slice.call(decompressed)));
      },
        "compressTest" :
            function() {
                var plain = "HELLO WORLD45.55,82.1,146.55,83.1,145.55,82.1,145.55,83.3,145.55,83.3,145.55,85.05,145.55,85.05,145.55,86.25,145.55,86.25,145.55,88,145.55,88,145.55,89.2,145.55,89.2,145.55,90.4,145.55,90.4,145.55,92.15,145.55,92.15,145.55,93.35,145.55,93.35,145.55,95.7,145.55,95.7,145.55,96.9,145.55,96.9,145.55,104.55,145.55,104.55,145.55,106.95,145.55,106.95,145.55,109.9,145.55,109.9,145.55,114,145.55,114,145.55,115.2,145.55,115.2,145.55,117.55,145.55,117.55,145.55,119.95,145.55,119.95,145.55,121.7,145.55,121.7,145.55,124.05,145.55,124.05,145.55,127,145.55,127,145.55,128.8,145.55,128.8,145.55,131.15,145.55,131.15,145.55,132.35,145.55,132.35,145.55,132.95,145.55,132.95,144.95,135.3,144.95,135.3,144.95,137.05,144.95,137.05,144.95,138.25,144.95,138.25,144.95,141.2,144.95,141.2,144.95,143,144.95,143,144.95,144.15,144.95,144.15,144.95,145.95,144.95,145.95,144.95,147.1,144.95,147.1,144.95,148.3,144.95,148.3,144.95,150.05,144.95,150.05,145.55,150.05,145.55,150.05,146.7,151.85,146.7,151.85,147.9,153,147.9,153,149.65,154.2,149.65,154.2,150.25,154.8,150.25,154.8,151.45,156,151.45,156,153.8,157.15,153.8,157.15,154.95,157.75,154.95,157.75,158.5,158.35,158.5,158.35,166.75,159.5,166.75,159.5,170.3,159.5,170.3,159.5,175.6,159.5,175.6,159.5,179.7,159.5,179.7,159.5,183.85,159.5,183.85,159.5,188.55,159.5,188.55,159.5,192.1,159.5,192.1,159.5,196.2,158.95,196.2,158.95,200.35,157.15,200.35,157.15,202.7,156,202.7,156,209.75,153,209.75,153,212.7,151.85,212.7,151.85,214.5,150.65,214.5,150.65,216.25,150.05,216.25,150.05,217.45,147.7,217.45,147.7,219.8,145.95,219.8,145.95,220.95,144.75,220.95,144.75,222.75,143,222.75,143,223.35,141.2,223.35,141.2,225.1,138.25,225.1,138.25,226.25,134.7,226.25,134.7,226.25,132.95,226.25,132.95,226.25,130.55,226.25,130.55,226.85,128.8,226.85,128.8,228.05,125.85,228.05,125.85,228.65,123.5,228.65,123.5,229.2,120.5,229.2,120.5,229.8,118.15,229.8,118.15,229.8,112.85,229.8,112.85,229.8,109.9,229.8,109.9,229.8,106.95,229.8,106.95,229.8,104.55,229.8,104.55,229.8,102.2,229.8,102.2,229.8,101,229.8,101,229.2,97.5,229.2,97.5,228.65,96.3,228.65,96.3,228.65,95.7,228.65,95.7,228.05,93.95,228.05,93.95,225.7,89.8,225.7,89.8,225.1,89.2,225.1,89.2,223.9,88,223.9,88,223.35,88,223.35,88,222.75,86.85,222.75,86.85,221.55,85.65,221.55,85.65,220.4,85.65,220.4,85.65,219.8,84.5,219.8,84.5,219.2,84.5,219.2,84.5,218.6,83.9,218.6,83.9,217.45,83.3,217.45,83.3,216.85,82.7,216.85,82.7,215.65,82.7,215.65,82.7,213.9,81.5,213.9,81.5,209.75,80.95,209.75,80.95,208.6,80.95,208.6,80.95,206.85,79.75,206.85,79.75,205.65,79.75,205.65,79.75,204.45,79.75,204.45,79.75,202.7,79.15,202.7,79.15,200.95,79.15,200.95,79.15,200.35,79.15,200.35,79.15,199.75,78.55,199.75,78.55,199.15,78.55,199.15,78.55,198,78.55,198,78.55,197.4,78.55,197.4,78.55,195.65,78.55,195.65,78.55,195.05,78.55,195.05,78.55,193.25,78.55,193.25,78.55,192.7,78.55,192.7,78.55,191.5,78.55,191.5,78.55,190.9,78.55,190.9,78.55,189.15,78.55,189.15,78.55,188.55,78.55,188.55,78.55,187.95,78.55,187.95,78.55,186.8,78.55,186.8,78.55,186.2,78.55,186.2,78.55,185.6,78.55,185.6,78.55,184.45,78.55,184.45,78.55,183.85,78.55,183.85,78.55,183.25,78.55,183.25,78.55,182.65,78.55,182.65,78.55,182.1,78.55,182.1,78.55,181.5,78.55,181.5,78.55,180.3,78.55,180.3,78.55,179.15,79.15,179.15,79.15,178.55,79.15,178.55,79.15,177.95,79.15,177.95,79.15,177.35,79.15,177.35,79.15,176.2,79.15,176.2,79.15,175,79.15,175,79.15,173.85,79.15,173.85,79.15,167.95,80.35,167.95,80.35,166.75,80.35,166.75,80.35,165.6,80.35,165.6,80.35,165,80.35,165,80.35,164.4,80.35,164.4,80.35,162.65,80.35,162.65,80.35,162.05,80.35,162.05,80.35,160.85,80.35,160.85,80.35,159.7,80.35,159.7,80.35,158.5,80.35,158.5,80.35,157.9,80.35,157.9,80.35,157.35,80.35,157.35,80.35,155.55,80.35,155.55,80.35,154.4,80.95,154.4,80.95,152.6,80.95,152.6,80.95,152.05,81.5,152.05,81.5,151.45,81.5,151.45,81.5,149.1,82.1,149.1,82.1,149.1,82.7这是中文测试";
                var deflater = new Zlib.Deflate(utf8.toByteArray(plain));
                var compressed = deflater.compress();
                compressed = encodeBase64(compressed);
                console.log((compressed));
                var compressed = decodeB64(compressed);
                var inflator = new Zlib.Inflate(compressed);
                var decompressed = inflator.decompress();

                var str = utf8.unserializeByteArray(decompressed);
                console.log('decompress========================');
                console.log(str);
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

    // inflate test
    function inflateTest(mode, testData, compressionType, inflateOption) {
        var deflate;
        var inflate;

        console.log("mode:", mode);
        console.log("type:", compressionType);

        // deflate
        deflate = new Zlib.Deflate(testData, {
            compressionType: compressionType
        }).compress();
        console.log("deflated data size:", deflate.length);

        // inflate
        if (inflateOption) {
            inflateOption.verify = true;
        } else {
            inflateOption = {verify: true};
        }
        inflate = (new Zlib.Inflate(deflate, inflateOption)).decompress();
        console.log("inflated data size:", inflate.length)

        // assertion
        buster.assert(inflate.length, testData.length);
        buster.assert(arrayEquals(inflate, testData));
    }

})();
