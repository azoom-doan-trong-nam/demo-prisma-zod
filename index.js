import {
  extendZodWithOpenApi,
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
import YAML from "yaml";
import fs from 'fs';
import {
  ParkingContractSchema,
  CarRoomParkingContractSchema,
  ContractorSchema,
} from "./lib/index.js";

extendZodWithOpenApi(z);
const registry = new OpenAPIRegistry();

registry.registerPath({
  method: "post",
  path: "/parking-contracts",
  description: "Create a new parking contract",
  request: {
    body: {
      description: "Create a new parking contract",
      content: {
        "application/json": {
          schema: z.object({
            contractor: ContractorSchema.pick({ name: true, email: true, legalEntity: true }),
            parkingContract: ParkingContractSchema.omit({ id: true }),
            carRoomParkingContracts: z.array(CarRoomParkingContractSchema.omit({ id: true })),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Created",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string().openapi({ example: "Created" }),
          }),
        },
      },
    },
  },
});
const generator = new OpenApiGeneratorV3(registry.definitions);

const apiDefinition = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
    description: "This is the API",
  },
  servers: [{ url: "v1" }],
});
const doc = new YAML.Document();
doc.contents = apiDefinition;
fs.writeFileSync("openapi.yaml", doc.toString());
