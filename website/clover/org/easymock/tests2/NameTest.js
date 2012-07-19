var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":96,"id":6445,"methods":[{"el":41,"sc":5,"sl":29},{"el":55,"sc":5,"sl":43},{"el":69,"sc":5,"sl":57},{"el":84,"sc":5,"sl":71},{"el":94,"sc":5,"sl":86}],"name":"NameTest","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1213":{"methods":[{"sl":57}],"name":"nameForNiceMock","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67}]},"test_1332":{"methods":[{"sl":71}],"name":"nameForMocksControl","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_1367":{"methods":[{"sl":57}],"name":"nameForNiceMock","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67}]},"test_1548":{"methods":[{"sl":71}],"name":"nameForMocksControl","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_1585":{"methods":[{"sl":43}],"name":"nameForStrictMock","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53}]},"test_2059":{"methods":[{"sl":29}],"name":"nameForMock","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_2168":{"methods":[{"sl":86}],"name":"shouldThrowIllegalArgumentExceptionIfNameIsNoValidJavaIdentifier","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92}]},"test_2219":{"methods":[{"sl":86}],"name":"shouldThrowIllegalArgumentExceptionIfNameIsNoValidJavaIdentifier","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92}]},"test_2243":{"methods":[{"sl":86}],"name":"shouldThrowIllegalArgumentExceptionIfNameIsNoValidJavaIdentifier","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92}]},"test_2293":{"methods":[{"sl":71}],"name":"nameForMocksControl","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_23":{"methods":[{"sl":71}],"name":"nameForMocksControl","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_2302":{"methods":[{"sl":29}],"name":"nameForMock","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_2307":{"methods":[{"sl":57}],"name":"nameForNiceMock","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67}]},"test_2446":{"methods":[{"sl":86}],"name":"shouldThrowIllegalArgumentExceptionIfNameIsNoValidJavaIdentifier","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92}]},"test_259":{"methods":[{"sl":71}],"name":"nameForMocksControl","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_2650":{"methods":[{"sl":29}],"name":"nameForMock","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_410":{"methods":[{"sl":43}],"name":"nameForStrictMock","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53}]},"test_429":{"methods":[{"sl":43}],"name":"nameForStrictMock","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53}]},"test_431":{"methods":[{"sl":29}],"name":"nameForMock","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_545":{"methods":[{"sl":29}],"name":"nameForMock","pass":true,"statements":[{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39}]},"test_546":{"methods":[{"sl":86}],"name":"shouldThrowIllegalArgumentExceptionIfNameIsNoValidJavaIdentifier","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":92}]},"test_666":{"methods":[{"sl":43}],"name":"nameForStrictMock","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53}]},"test_716":{"methods":[{"sl":57}],"name":"nameForNiceMock","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67}]},"test_719":{"methods":[{"sl":43}],"name":"nameForStrictMock","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53}]},"test_757":{"methods":[{"sl":57}],"name":"nameForNiceMock","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":66},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2059, 545, 431, 2302, 2650], [], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [2059, 545, 431, 2302, 2650], [], [], [], [429, 410, 666, 1585, 719], [], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [429, 410, 666, 1585, 719], [], [], [], [1367, 1213, 2307, 716, 757], [], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [1367, 1213, 2307, 716, 757], [], [], [], [23, 2293, 259, 1332, 1548], [], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [23, 2293, 259, 1332, 1548], [], [], [], [2168, 2219, 2446, 546, 2243], [], [2168, 2219, 2446, 546, 2243], [2168, 2219, 2446, 546, 2243], [], [], [2168, 2219, 2446, 546, 2243], [], [], [], []]