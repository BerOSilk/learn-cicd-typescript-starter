import { describe, expect, test } from "vitest";

const person = {
    isActive: false,
    age: 32,
};

describe("person", () => {
    test("person is defines", () => {
        expect(person).toBeDefined();
    });

    test("isActive", () => {
        expect(person.isActive).toBe(true);
    });

})