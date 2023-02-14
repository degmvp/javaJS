//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Math");

console.log(Math.abs('-1'));     // 1
console.log(Math.abs(-2));       // 2
console.log(Math.abs(null));     // 0
console.log(Math.abs(''));       // 0
console.log(Math.abs([]));       // 0
console.log(Math.abs([2]));      // 2

console.log("Math.abs() Boleano (0) (1) (-1) ");
console.log(Math.abs(0)); 
console.log(Math.abs(1)); 
console.log(Math.abs(-1)); 
console.log("Math.sign() Boleano (0) (1) (-1) ");
console.log(Math.sign(0));     //  0
console.log(Math.sign(3));     //  1
console.log(Math.sign(-3));    // -1

console.log(Math.floor( 45.95)); //  45
console.log(Math.floor(-45.95)); // -46

(function(){

	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}

})();
    console.log(Math.round10(55.55, -1)); // 55.6
    console.log(Math.floor(55.55, -1));   // 55
    console.log(Math.ceil10(55.55, -1));  // 55.6

    console.log(Math.round10(55.55, -2)); // 55.55
    console.log(Math.floor(55.55, -2));   // 55
    console.log(Math.ceil10(55.55, -2));  // 55.55

	console.log(Math.max(3,6,8,10));	
	console.log(Math.min(3,6,8,10));