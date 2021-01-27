/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import Animal from '../interfaces/animal.interface';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {Animal};
export const AnimalSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "definitions": {
    "default": {
      "defaultProperties": [
      ],
      "properties": {
        "allergy": {
          "type": [
            "null",
            "string"
          ]
        },
        "animalId": {
          "type": "number"
        },
        "birthDate": {
          "type": [
            "null",
            "string"
          ]
        },
        "breed": {
          "type": [
            "null",
            "string"
          ]
        },
        "color": {
          "type": [
            "null",
            "string"
          ]
        },
        "food": {
          "type": [
            "null",
            "string"
          ]
        },
        "gender": {
          "type": [
            "null",
            "string"
          ]
        },
        "species": {
          "type": [
            "null",
            "string"
          ]
        },
        "weight": {
          "type": [
            "null",
            "number"
          ]
        }
      },
      "required": [
        "allergy",
        "animalId",
        "birthDate",
        "breed",
        "color",
        "food",
        "gender",
        "species",
        "weight"
      ],
      "type": "object"
    },
    "default_1": {
      "defaultProperties": [
      ],
      "properties": {
        "animalId": {
          "type": "number"
        },
        "registrationDate": {
          "type": [
            "null",
            "string"
          ]
        },
        "registrationNo": {
          "type": "string"
        },
        "status": {
          "type": [
            "null",
            "string"
          ]
        }
      },
      "required": [
        "animalId",
        "registrationDate",
        "registrationNo",
        "status"
      ],
      "type": "object"
    },
    "default_2": {
      "defaultProperties": [
      ],
      "properties": {
        "animalId": {
          "type": "number"
        },
        "installDate": {
          "type": [
            "null",
            "string"
          ]
        },
        "microchipId": {
          "type": "string"
        },
        "status": {
          "type": [
            "null",
            "string"
          ]
        }
      },
      "required": [
        "animalId",
        "installDate",
        "microchipId",
        "status"
      ],
      "type": "object"
    }
  },
  "properties": {
    "comments": {
      "type": [
        "null",
        "string"
      ]
    },
    "details": {
      "$ref": "#/definitions/default"
    },
    "id": {
      "type": "number"
    },
    "imageUrl": {
      "type": [
        "null",
        "string"
      ]
    },
    "microchip": {
      "$ref": "#/definitions/default_2"
    },
    "modTime": {
      "type": [
        "null",
        "string"
      ]
    },
    "name": {
      "type": [
        "null",
        "string"
      ]
    },
    "organization": {
      "type": "number"
    },
    "registration": {
      "$ref": "#/definitions/default_1"
    },
    "status": {
      "type": [
        "null",
        "string"
      ]
    }
  },
  "required": [
    "comments",
    "details",
    "id",
    "imageUrl",
    "microchip",
    "modTime",
    "name",
    "organization",
    "registration",
    "status"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isAnimal = ajv.compile(AnimalSchema) as ValidateFunction<Animal>;
export default function validate(value: unknown): Animal {
  if (isAnimal(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isAnimal.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'Animal'}) +
      '\n\n' +
      inspect(value),
    );
  }
}
