import { describe, it, expect } from "vitest";
import { config } from "../src/lib/config";
describe("config", () => { it("has name", () => expect(config.appName).toBeTruthy()); });
