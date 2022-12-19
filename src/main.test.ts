import { Calculator } from "./calculator";
import { test, describe, expect, assert } from "vitest";

describe("check basic operations", () => {
	test("pressButton('1') changes currentValue to '1'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		expect(calc.currentValue).toEqual("1");
	});

	test("1 + 1 = 2", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("2");
	});

	test("7 - 4 = 3", () => {
		const calc = new Calculator();
		calc.pressButton("7");
		calc.pressButton("-");
		calc.pressButton("4");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("3");
	});

	test("2 * 2 = 4", () => {
		const calc = new Calculator();
		calc.pressButton("2");
		calc.pressButton("*");
		calc.pressButton("2");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("4");
	});

	test("12 / 3 = 4", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("2");
		calc.pressButton("/");
		calc.pressButton("3");
		calc.pressButton("=");
		expect(calc.currentValue).toEqual("4");
	});
});

describe("test digit button + operator interactions effect on display", () => {
	test("pressing '1', '1', '+' changes display value to '11'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		expect(calc.display).toEqual("11");
	});

	test("pressing '1', '1', '+', '1' changes display value to '1'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		expect(calc.display).toEqual("1");
	});

	test("pressing '1', '1', '+', '1', '1', '=' changes display value to '22'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.display).toEqual("22");
	});

	test("pressing '1', '1', '+', '1', '1', '+' changes display value to '22'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("1");
		calc.pressButton("+");
		expect(calc.display).toEqual("22");
	});

	test("pressing '1', '+', '1', '+', '1', '=' changes display value to '3'", () => {
		const calc = new Calculator();
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("+");
		calc.pressButton("1");
		calc.pressButton("=");
		expect(calc.display).toEqual("3");
	});
});

describe("random tests, nothing to do with the calculator", () => {});
