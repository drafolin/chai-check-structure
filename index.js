const { checkStructureOrThrow } = require("check-structure");

function chaiStructure(chai, utils) {
	var Assertion = chai.Assertion;

	utils.addMethod(Assertion.prototype, 'structure', function (interfaceMap) {
		// map is an object map with property names as keys and strings for
		// typeof checks or a nested interfaceMap
		checkStructureOrThrow(this._obj, interfaceMap);
	});

}

chaiStructure.chaiStructure = chaiStructure;

module.exports = chaiStructure;
