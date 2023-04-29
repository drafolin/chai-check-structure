const { checkStructuresOrThrow } = require("check-structure");

function chaiStructure(chai, utils) {
	var Assertion = chai.Assertion;

	utils.addMethod(Assertion.prototype, 'structure', function (interfaceMap) {
		// map is an object map with property names as keys and strings for
		// typeof checks or a nested interfaceMap
		checkStructuresOrThrow(this._obj, interfaceMap);
	});

}

module.exports = {
	chaiStructure,
	default: chaiStructure
};
