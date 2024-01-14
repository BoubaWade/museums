import { expect, describe, it, vi, afterEach } from "vitest";
import {
  filterArrayById,
  findObjectInArray,
  mapArrayForChangeAddedProperty,
  mapArrayToAddDatePicked,
} from "./utils";

describe("findObjectInArray", () => {
  it("should return undefined if array is empty", () => {
    const array = [];
    const objectId = "abCde";
    expect(findObjectInArray(array, objectId)).toBeUndefined();
  });

  it("should return undefined if array is undefined", () => {
    const array = undefined;
    const objectId = "abCde";
    expect(findObjectInArray(array, objectId)).toBeUndefined();
  });

  it("should return undefined if object is not found in array", () => {
    const array = [
      { id: "SD23nv", name: "malick" },
      { id: "aED19n", name: "mike" },
    ];
    const objectId = "abC3de";
    expect(findObjectInArray(array, objectId)).toBeUndefined();
  });
  it("should return object if it is found in array", () => {
    const array = [
      { id: "SD23nv", name: "nathan" },
      { id: "abC3de", name: "karim" },
      { id: "aED19n", name: "mike" },
    ];
    const objectId = "abC3de";
    expect(findObjectInArray(array, objectId)).toEqual({
      id: "abC3de",
      name: "karim",
    });
  });
});

describe("filterArrayById", () => {
  it("should return [] if array is empty", () => {
    const array = [];
    const objectId = "abCde";
    expect(filterArrayById(array, objectId)).toEqual([]);
  });
  it("should return undefined if array is undefined", () => {
    const array = undefined;
    const objectId = "abCde";
    expect(filterArrayById(array, objectId)).toBeUndefined();
  });
  it("should return same array if id is not found in an object", () => {
    const array = [
      { id: "SD23nv", name: "nathan" },
      { id: "abC3de", name: "karim" },
      { id: "aED19n", name: "mike" },
    ];
    const objectId = "abCde";
    expect(filterArrayById(array, objectId)).toEqual(array);
  });
  it("should return arrayFiltered if id is found in an object", () => {
    const array = [
      { id: "SD23nv", name: "nathan" },
      { id: "abC3de", name: "karim" },
      { id: "aED19n", name: "mike" },
    ];
    const objectId = "SD23nv";
    expect(filterArrayById(array, objectId)).toEqual([
      { id: "abC3de", name: "karim" },
      { id: "aED19n", name: "mike" },
    ]);
  });
});

describe("mapArrayForChangeAddedProperty", () => {
  it("should return [] if array is empty", () => {
    const array = [];
    const objectId = "AZb5";
    const isAdded = true;
    expect(mapArrayForChangeAddedProperty(array, objectId, isAdded)).toEqual(
      []
    );
  });
  it("should return undefined if array is undefined", () => {
    const array = undefined;
    const objectId = "AZb5";
    const isAdded = true;
    expect(mapArrayForChangeAddedProperty(array, objectId, isAdded)).toEqual(
      undefined
    );
  });
  it("should return arrayUpdated if id is found in an object", () => {
    const array = [
      { id: "SD23nv", name: "nathan", isAdded: false },
      { id: "abC3de", name: "karim", isAdded: true },
      { id: "aED19n", name: "mike", isAdded: false },
    ];
    const objectId = "aED19n";
    const isAdded = true;
    expect(mapArrayForChangeAddedProperty(array, objectId, isAdded)).toEqual([
      { id: "SD23nv", name: "nathan", isAdded: false },
      { id: "abC3de", name: "karim", isAdded: true },
      { id: "aED19n", name: "mike", isAdded: true },
    ]);
  });
  it("should return same array if id is not found in an object", () => {
    const array = [
      { id: "SD23nv", name: "nathan", isAdded: false },
      { id: "abC3de", name: "karim", isAdded: true },
      { id: "aED19n", name: "mike", isAdded: false },
    ];
    const objectId = "Q75HV";
    const isAdded = true;
    expect(mapArrayForChangeAddedProperty(array, objectId, isAdded)).toEqual([
      { id: "SD23nv", name: "nathan", isAdded: false },
      { id: "abC3de", name: "karim", isAdded: true },
      { id: "aED19n", name: "mike", isAdded: false },
    ]);
  });
});

describe("mapArrayToAddDatePicked", () => {
  it("should return [] if array is empty", () => {
    const array = [];
    const objectId = "AZb5";
    const datePicked = "15/02/2024";
    const hour = "15:30";
    expect(mapArrayToAddDatePicked(array, datePicked, hour, objectId)).toEqual(
      []
    );
  });
  it("should return undefined if array is undefined", () => {
    const array = undefined;
    const objectId = "AZb5";
    const datePicked = "15/02/2024";
    const hourPicked = "15:30";
    expect(
      mapArrayToAddDatePicked(array, datePicked, hourPicked, objectId)
    ).toEqual(undefined);
  });
  it("should return arrayUpdated if id is found in an object", () => {
    const array = [
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "09/02/2023", hourPicked: "9:30" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ];
    const objectId = "abC3de";
    const datePicked = "15/02/2025";
    const hourPicked = "8:30";
    expect(
      mapArrayToAddDatePicked(array, datePicked, hourPicked, objectId)
    ).toEqual([
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "15/02/2025", hourPicked: "8:30" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ]);
  });
  it("should return arrayUpdated if id is found in an object and datePicked, hourPicked are empty", () => {
    const array = [
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "", hourPicked: "" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ];
    const objectId = "abC3de";
    const datePicked = "15/02/2025";
    const hourPicked = "8:30";
    expect(
      mapArrayToAddDatePicked(array, datePicked, hourPicked, objectId)
    ).toEqual([
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "15/02/2025", hourPicked: "8:30" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ]);
  });

  it("should return same array if id is not found in an object", () => {
    const array = [
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "", hourPicked: "" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ];
    const objectId = "Q75HV";
    const isAdded = true;
    expect(mapArrayToAddDatePicked(array, objectId, isAdded)).toEqual([
      { id: "SD23nv", datePicked: "01/01/2023", hourPicked: "15:30" },
      { id: "abC3de", datePicked: "", hourPicked: "" },
      { id: "aED19n", datePicked: "05/07/2024", hourPicked: "11:45" },
    ]);
  });
});
