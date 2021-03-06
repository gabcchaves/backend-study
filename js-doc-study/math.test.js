describe("Math Object", () => {
	describe("Properties", () => {

		// Euler's constant. Approximately 2.718.
		describe("E", () => {
			test("Check Euler's constant", () => {
				expect(Math.E).toBeCloseTo(2.718);
			});
		});

		// Natural log(10) (≈2.302)
		describe("LN10", () => {
			test("Check LN10", () => {
				expect(Math.LN10).toBe(2.302585092994046);
			});
		});

		// Natural log(2) (≈0.693)
		describe("LN2", () => {
			test("Check LN2", () => {
				expect(Math.LN2).toBe(0.6931471805599453);
			});
		});

		// Base 10 logarithm of e (≈0.434)
		describe("LOG10E", () => {
			test("Check LOG10E", () => {
				expect(Math.LOG10E).toBe(0.4342944819032518);
			});
		});

		// Base 2 logarithm of e (≈1.442)
		describe("LOG2E", () => {
			test("Check LOG2E", () => {
				expect(Math.LOG2E).toBe(1.4426950408889634);
			});
		});

		// π constant
		describe("PI", () => {
			test("Check PI", () => {
				expect(Math.PI).toBe(3.141592653589793);
			});
			test("Calculate the area of a circle (radius = 7)", () => {
				let circleArea = Math.PI * 7**2;
				expect(circleArea).toBe(153.93804002589985);
			});
		});

		// Square root of 1/2
		describe("SQRT1_2", () => {
			test("Check SQRT1_2", () => {
				expect(Math.SQRT1_2).toBe(0.7071067811865476);
			});
		});

		// Square root of 2
		describe("SQRT2", () => {
			test("Check SQRT2", () => {
				expect(Math.SQRT2).toBe(1.4142135623730951);
			});
		});

	});

	// Methods
	describe("Methods", () => {
		// Absolute value of a number
		describe("abs(n)", () => {
			test("arg: -3", () => {
				expect(Math.abs(-3)).toBe(3);
			});
		});

		// Arccosine (in radians)
		describe("acos(n)", () => {
			test("arg: -2", () => {
				expect(Math.acos(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.acos(-1)).toBe(3.141592653589793);
			});
			test("arg: 0", () => {
				expect(Math.acos(-0)).toBe(1.5707963267948966);
			});
			test("arg: 1", () => {
				expect(Math.acos(1)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.acos(2)).toBe(NaN);
			});
		});

		// Hiperbolic arccosine
		describe("acosh(n)", () => {
			test("arg: -1", () => {
				expect(Math.acosh(-1)).toBe(NaN);
			});
			test("arg: 0", () => {
				expect(Math.acosh(0)).toBe(NaN);
			});
			test("arg: 1", () => {
				expect(Math.acosh(1)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.acosh(2)).toBe(1.3169578969248166);
			});
		});

		// Arcsine (in radians)
		describe("asin(n)", () => {
			test("arg: -2", () => {
				expect(Math.asin(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.asin(-1)).toBe(- Math.PI / 2);
			});
			test("arg: 0", () => {
				expect(Math.asin(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.asin(1)).toBe(Math.PI / 2);
			});
			test("arg: 2", () => {
				expect(Math.asin(2)).toBe(NaN);
			});
		});


		// Hiperbolic arcsine
		describe("asinh(n)", () => {
			test("arg: 1", () => {
				expect(Math.asinh(1)).toBe(0.881373587019543);
			});
			test("arg: 0", () => {
				expect(Math.asinh(0)).toBe(0);
			});
			test("arg: -1", () => {
				expect(Math.asinh(-1)).toBe(-0.881373587019543);
			});
			test("arg: 2", () => {
				expect(Math.asinh(2)).toBe(1.4436354751788103);
			});
		});

		// Arctangent (radians)
		describe("atan(n)", () => {
			test("arg: 1", () => {
				expect(Math.atan(1)).toBe(0.7853981633974483);
			});
			test("arg: 0", () => {
				expect(Math.atan(0)).toBe(0);
			});
			test("arg: -0", () => {
				expect(Math.atan(-0)).toBe(-0);
			});
			test("arg: Infinity", () => {
				expect(Math.atan(Infinity)).toBe(1.5707963267948966);
			});
			test("arg: Infinity", () => {
				expect(Math.atan(-Infinity)).toBe(-1.5707963267948966);
			});
			test("arg: 8 / 10", () => {
				expect(Math.atan(8 / 10)).toBe(0.6747409422235527);
			});
			test("arg: 5 / 3", () => {
				expect(Math.atan(5 / 3)).toBe(1.0303768265243125);
			});
		});

		// Returns the angle of a point
		describe("atan2(x, y)", () => {
			test("args: 90,15", () => {
				expect(Math.atan2(90, 15)).toBe(1.4056476493802699);
			});
			test("args: 15, 90", () => {
				expect(Math.atan2(15, 90)).toBe(0.16514867741462683);
			});
			test("args: 10, 10", () => {
				expect(Math.atan2(10, 10)).toBe(0.7853981633974483);
			});
		});

		// Returns the hyperbolic arctagent of a number
		describe("atanh(n)", () => {
			test("arg: -2", () => {
				expect(Math.atanh(-2)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.atanh(-1)).toBe(-Infinity);
			});
			test("arg: 0", () => {
				expect(Math.atanh(0)).toBe(0);
			});
			test("arg: 0.5", () => {
				expect(Math.atanh(0.5)).toBe(0.5493061443340548);
			});
			test("arg: 1", () => {
				expect(Math.atanh(1)).toBe(Infinity);
			});
			test("arg: 2", () => {
				expect(Math.atanh(2)).toBe(NaN);
			});
		});

		// Returns the cubic root of a number
		describe("cbrt(n)", () => {
			test("arg: NaN", () => {
				expect(Math.cbrt(NaN)).toBe(NaN);
			});
			test("arg: -1", () => {
				expect(Math.cbrt(-1)).toBe(-1);
			});
			test("arg: -0", () => {
				expect(Math.cbrt(-0)).toBe(-0);
			});
			test("arg: -Infinity", () => {
				expect(Math.cbrt(-Infinity)).toBe(-Infinity);
			});
			test("arg: 0", () => {
				expect(Math.cbrt(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.cbrt(1)).toBe(1);
			});
			test("arg: Infinity", () => {
				expect(Math.cbrt(Infinity)).toBe(Infinity);
			});
			test("arg: null", () => {
				expect(Math.cbrt(null)).toBe(0);
			});
			test("arg: 2", () => {
				expect(Math.cbrt(2)).toBe(1.2599210498948732);
			});
			test("arg: 9", () => {
				expect(Math.cbrt(27)).toBe(3);
			});
		});

		// Returns the smallest integer greater than or equal to the given number
		describe("ceil(n)", () => {
			test("arg: 0.95", () => {
				expect(Math.ceil(.95)).toBe(1);
			});
			test("arg: 4", () => {
				expect(Math.ceil(4)).toBe(4);
			});
			test("arg: 7.004", () => {
				expect(Math.ceil(7.004)).toBe(8);
			});
			test("arg: -0.95", () => {
				expect(Math.ceil(-.95)).toBe(-0);
			});
			test("arg: -4", () => {
				expect(Math.ceil(-4)).toBe(-4);
			});
			test("arg: -7.004", () => {
				expect(Math.ceil(-7.004)).toBe(-7);
			});
		});

		// Returns the number of leading zero bits in the 32 bit representation of the given number
		describe("clz32(n)", () => {
			test("arg: 1", () => {
				// 1
				expect(Math.clz32(1)).toBe(31);
			});
			test("arg: 4", () => {
				// 100
				expect(Math.clz32(4)).toBe(29);
			});
			test("arg: 7", () => {
				// 111
				expect(Math.clz32(7)).toBe(29);
			});
		});

		// Returns the cosine of the given number (in radians)
		describe("cos(n)", () => {
			test("arg: 0", () => {
				expect(Math.cos(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.cos(1)).toBe(0.5403023058681398);
			});
			test("arg: Math.PI", () => {
				expect(Math.cos(Math.PI)).toBe(-1);
			});
			test("arg: 2 * Math.PI", () => {
				expect(Math.cos(2 * Math.PI)).toBe(1);
			});
		});

		// Returns the hyperbolic cosine of a number
		describe("cosh(n)", () => {
			test("arg: 0", () => {
				expect(Math.cosh(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.cosh(1)).toBe(1.5430806348152437);
			});
			test("arg: -1", () => {
				expect(Math.cosh(-1)).toBe(1.5430806348152437);
			});
			test("arg: 2", () => {
				expect(Math.cosh(2)).toBe(3.7621956910836314);
			});
		});

		// Returns the result of e constant raised to the power of the given number
		describe("exp(n)", () => {
			test("arg: -1", () => {
				expect(Math.exp(-1)).toBe(0.36787944117144233);
			});
			test("arg: 0", () => {
				expect(Math.exp(0)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.exp(1)).toBe(2.718281828459045);
			});
		});

		// Returns e^n - 1
		describe("expm1(n)", () => {
			test("arg: 0", () => {
				expect(Math.expm1(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.expm1(1)).toBe(1.718281828459045);
			});
			test("arg: -1", () => {
				expect(Math.expm1(-1)).toBe(-0.6321205588285577);
			});
			test("arg: 2", () => {
				expect(Math.expm1(2)).toBe(6.38905609893065);
			});
		});

		// Floor of a floating number
		describe("floor(n)", () => {
			test("arg: 1.2", () => {
				expect(Math.floor(1.2)).toBe(1);
			});
			test("arg: 2.3", () => {
				expect(Math.floor(2.3)).toBe(2);
			});
			test("arg: 3.4", () => {
				expect(Math.floor(3.4)).toBe(3);
			});
		});

		// Returns the nearest 32-bit single precision float representation of a Number
		describe("fround(n)", () => {
			test("arg: 5.5", () => {
				expect(Math.fround(5.5)).toBe(5.5);
			});
			test("arg: 5.05", () => {
				expect(Math.fround(5.05)).toBe(5.050000190734863);
			});
			test("arg: 5", () => {
				expect(Math.fround(5)).toBe(5);
			});
		});

		// Returns the square root of the sum of the squares of the arguments
		describe("hypot(a, b)", () => {
			test("args: 3, 4", () => {
				expect(Math.hypot(3, 4)).toBe(5);
			});
			test("args: 9, 12", () => {
				expect(Math.hypot(9, 12)).toBe(15);
			});
			test("arg: -5", () => {
				expect(Math.hypot(5)).toBe(5);
			});
		});

		// Returns the C-like product of the two parameters
		describe("imul(a, b)", () => {
			test("args: 3, 4", () => {
				expect(Math.imul(3, 4)).toBe(12);
			});
			test("args: -5, 12", () => {
				expect(Math.imul(-5, 12)).toBe(-60);
			});
			test("args: 0xffffffff, 5", () => {
				expect(Math.imul(0xffffffff, 5)).toBe(-5);
			});
		});

		// Returns the natural logarithm of a number
		describe("log(n)", () => {
			test("arg: -1", () => {
				expect(Math.log(-1)).toBe(NaN);
			});
			test("arg: 0", () => {
				expect(Math.log(0)).toBe(-Infinity);
			});
			test("arg: 1", () => {
				expect(Math.log(1)).toBe(0);
			});
			test("arg: 10)", () => {
				expect(Math.log(10)).toBe(2.302585092994046);
			});
		});

		// Returns the base 10 logarithm of a number
		describe("log10(n)", () => {
			test("arg: 2", () => {
				expect(Math.log10(2)).toBe(0.3010299956639812);
			});
			test("arg: 1", () => {
				expect(Math.log10(1)).toBe(0);
			});
			test("arg: -2", () => {
				expect(Math.log10(-2)).toBe(NaN);
			});
			test("arg: 100000", () => {
				expect(Math.log10(100000)).toBe(5);
			});
		});
		
		// Returns the natural logarithm of the given number plus 1
		describe("log1p(n)", () => {
			test("arg: 1", () => {
				expect(Math.log1p(1)).toBe(0.6931471805599453);
			});
			test("arg: 0", () => {
				expect(Math.log1p(0)).toBe(0);
			});
			test("arg: -1", () => {
				expect(Math.log1p(-1)).toBe(-Infinity);
			});
			test("arg: 2", () => {
				expect(Math.log1p(-2)).toBe(NaN);
			});
		});

		// Returns the base 2 logarithm of the given number
		describe("log2()", () => {
			test("arg: 3", () => {
				expect(Math.log2(3)).toBe(1.584962500721156);
			});
			test("arg: 2", () => {
				expect(Math.log2(2)).toBe(1);
			});
			test("arg: 1", () => {
				expect(Math.log2(1)).toBe(0);
			});
			test("arg: 128", () => {
				expect(Math.log2(128)).toBe(7);
			});
		});

		// Returns the largest of the given numbers
		describe("max(...)", () => {
			test("arg: [1, 2, 3]", () => {
				expect(Math.max(...[1, 2, 3])).toBe(3);
			});
			test("args: 5, 15, 30", () => {
				expect(Math.max(5, 15, 30)).toBe(30);
			});
			test("args: 40, 70, 20", () => {
				expect(Math.max(40, 70, 20)).toBe(70);
			});
			test("arg: [1, 3, 7, 8]", () => {
				let array = [1, 3, 7, 8];
				expect(Math.max(...array)).toBe(8);
			});
		});

		// Returns the smallest passed number
		describe("min(...)", () => {
			test("args: 1, 2, 3", () => {
				expect(Math.min(1, 2, 3)).toBe(1);
			});
			test("args: 10 15 30", () => {
				expect(Math.min(15, 10, 30)).toBe(10);
			});
			test("arg: [1, 2, 0, 5, 7, 9, 3]", () => {
				expect(Math.min(...[1, 2, 0, 5, 7, 9, 3])).toBe(0);
			});
			test("arg: [10, 4, 1]", () => {
				expect(Math.min(...[10, 4, 1])).toBe(1);
			});
		});

		// Retuns the given base to the power of the given exponent
		describe("pow(a, b)", () => {
			test("args: 2, 2", () => {
				expect(Math.pow(2, 2)).toBe(4);
			});
			test("args: 3, 2", () => {
				expect(Math.pow(3, 2)).toBe(9);
			});
			test("args: 2, 7", () => {
				expect(Math.pow(2, 7)).toBe(128);
			});
		});
		
		// Returns a pseudo-random floating-point number in the range 0 to less than 1
		describe("random()", () => {
			test("Test condition", () => {
				expect(Math.random()).toBeTruthy();
			});
		});

		// Returns the value of a number rounded to the nearest integer
		describe("round(n)", () => {
			test("arg: 0.9", () => {
				expect(Math.round(0.9)).toBe(1);
			});
			test("arg: 1.2", () => {
				expect(Math.round(1.2)).toBe(1);
			});
			test("arg: 3.5", () => {
				expect(Math.round(3.5)).toBe(4);
			});
		});

		// Returns either a positive or negative 1 indicating the sign of the given number
		describe("sign(n)", () => {
			test("arg: 3", () => {
				expect(Math.sign(3)).toBe(1);
			});
			test("arg: -3", () => {
				expect(Math.sign(-3)).toBe(-1);
			});
			test("arg: 0", () => {
				expect(Math.sign(0)).toBe(0);
			});
		});

		// Returns the sine of the given number (in radians)
		describe("sin(n)", () => {
			test("arg: 0", () => {
				expect(Math.sin(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.sin(1)).toBe(0.8414709848078965);
			});
			test("arg: Math.PI / 2", () => {
				expect(Math.sin(Math.PI / 2)).toBe(1);
			});
		});

		// Returns the hyperbolic sine of the given number
		describe("sinh(n)", () => {
			test("arg: 0", () => {
				expect(Math.sinh(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.sinh(1)).toBe(1.1752011936438014);
			});
			test("arg: -1", () => {
				expect(Math.sinh(-1)).toBe(-1.1752011936438014);
			});
			test("arg: 2", () => {
				expect(Math.sinh(2)).toBe(3.626860407847019);
			});
		});

		// Returns the square root of the given number
		describe("sqrt(n)", () => {
			test("arg: 4", () => {
				expect(Math.sqrt(4)).toBe(2);
			});
			test("arg: 9", () => {
				expect(Math.sqrt(9)).toBe(3);
			});
			test("arg: 144", () => {
				expect(Math.sqrt(144)).toBe(12);
			});
		});

		// Returns the tangent of the given number
		describe("tan(n)", () => {
			test("arg: 0", () => {
				expect(Math.tan(0)).toBe(0);
			});
			test("arg: 1", () => {
				expect(Math.tan(1)).toBe(1.5574077246549023);
			});
			test("arg: 90", () => {
				expect(Math.tan(90)).toBe(-1.995200412208242);
			});
		});

		// Returns the given hyperbolic tangent of the given number
		describe("tanh(n)", () => {
			test("arg: -1", () => {
				expect(Math.tanh(-1)).toBe(-0.7615941559557649);
			});
			test("arg: 0", () => {
				expect(Math.tanh(0)).toBe(0);
			});
			test("arg: 90", () => {
				expect(Math.tanh(90)).toBe(1);
			});
		});
		
		// Returns the integer part of the given number
		describe("trunc(n)", () => {
			test("arg: 1.2", () => {
				expect(Math.trunc(1.2)).toBe(1);
			});
			test("arg: 3.4", () => {
				expect(Math.trunc(3.4)).toBe(3);
			});
			test("arg: 7", () => {
				expect(Math.trunc(7)).toBe(7);
			});
		});
	});
});
