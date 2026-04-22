import { describe, it, expect } from "vitest";
import { cn } from "../src/lib/utils";
describe("cn", () => { it("joins truthy values", () => expect(cn("a", undefined, "b")).toBe("a b")); });
