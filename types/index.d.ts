export function chaiStructure(chai, utils);

export default chaiStructure;

declare global {
	namespace Chai {
		interface Assertion {
			structure(expected: any): Assertion;
		}
	}
}
